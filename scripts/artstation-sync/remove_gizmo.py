"""Remove the UE viewport axis gizmo baked into the bottom-left corner of the
Batman HighResScreenshots. Operates on the final debanded AVIFs (sources are
gone): decode to 16-bit, detect saturated colored gizmo pixels in the corner
region, fill from a normalized-convolution gaussian estimate of the untouched
surroundings, re-add matching grain, re-encode with the same pipeline as
deband_v7.py (10-bit 4:4:4 AVIF, crf 4 — see that file for why crf must be 4).

Usage: python3 remove_gizmo.py <in.avif> <out.avif>
"""

import json
import subprocess
import sys
import tempfile

import numpy as np
from scipy.ndimage import binary_dilation, gaussian_filter

from deband_v7 import _write_png16


REGION = 300  # bottom-left corner box (px) to scan
SPREAD = 25  # min channel spread (8-bit scale) to count as a colored pixel
DILATE = 4
GRAIN = 0.8  # matches deband_v7


def degizmo(src, out):
    probe = json.loads(
        subprocess.run(
            [
                "ffprobe",
                "-v",
                "error",
                "-select_streams",
                "v:0",
                "-show_entries",
                "stream=width,height",
                "-of",
                "json",
                src,
            ],
            check=True,
            capture_output=True,
        ).stdout
    )["streams"][0]
    w, h = probe["width"], probe["height"]
    raw = subprocess.run(
        [
            "ffmpeg",
            "-loglevel",
            "error",
            "-i",
            src,
            "-f",
            "rawvideo",
            "-pix_fmt",
            "rgb48le",
            "-",
        ],
        check=True,
        capture_output=True,
    ).stdout
    a = np.frombuffer(raw, dtype="<u2").reshape(h, w, 3).astype(np.float32)
    with tempfile.TemporaryDirectory() as td:
        box = a[h - REGION : h, 0:REGION]

        spread = (box.max(axis=2) - box.min(axis=2)) / 257.0
        mask = binary_dilation(spread > SPREAD, iterations=DILATE)
        if not mask.any():
            print(f"{src}: no gizmo found, skipping")
            return

        keep = (~mask).astype(np.float32)
        est = gaussian_filter(box * keep[..., None], sigma=(8, 8, 0))
        norm = gaussian_filter(keep, sigma=8)
        fill = est / np.maximum(norm, 1e-6)[..., None]
        rng = np.random.default_rng(42)
        fill += rng.normal(0, GRAIN * 257.0, fill.shape[:2])[..., None]
        box[mask] = fill[mask]

        u16 = np.clip(a, 0, 65535).astype(np.uint16)
        fixed = f"{td}/fixed.png"
        _write_png16(fixed, u16)
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-loglevel",
                "error",
                "-i",
                fixed,
                "-frames:v",
                "1",
                "-c:v",
                "libaom-av1",
                "-crf",
                "4",
                "-cpu-used",
                "4",
                "-pix_fmt",
                "yuv444p10le",
                out,
            ],
            check=True,
        )
        print(f"{src}: {int(mask.sum())} px filled -> {out}")


if __name__ == "__main__":
    degizmo(sys.argv[1], sys.argv[2])
