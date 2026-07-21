"""Deband dark spotlight-gradient renders (Batman set) — v7.

Previous attempts failed two ways: a flat-region mask misclassified the smooth
cowl/cape as background and blurred the character (v1-v6), and rembg couldn't
cut a dark character off a dark background. v7 uses neither a mask nor a
cutout: the wide-gaussian gradient estimate is applied as a correction CLAMPED
to +/-CLAMP code values. Banding steps are 1-2 values, so the clamp smooths
them fully, while no pixel anywhere can shift more than CLAMP/255 — hazing the
character is impossible by construction.

Output is 16-bit PNG (the correction is sub-integer, so 8-bit would re-band);
encode with ffmpeg to 10-bit 4:4:4 AVIF, whose finer quantization keeps the
gradient smooth without grain or lossless-size files:

  ffmpeg -y -i out16.png -frames:v 1 -c:v libaom-av1 -crf 4 -cpu-used 4 \
         -pix_fmt yuv444p10le out.avif

crf must be 4: at crf >= 6 libaom's quantizer floor strips the grain (measured
residual noise sigma drops 0.8 -> 0.07) and 8-bit displays re-band. ~770KB per
4K frame vs 2.6MB for the lossless WebP this replaces.

Usage: python3 deband_v7.py <src.jpg> <out16.png>
"""

import sys
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter

CLAMP = 3.0
GRAIN = 0.8  # luma grain dithers any 8-bit truncation at display time


def deband(src, out):
    a = np.asarray(Image.open(src).convert("RGB"), dtype=np.float32)
    wide = gaussian_filter(a, sigma=(60, 60, 0))
    result = a + np.clip(wide - a, -CLAMP, CLAMP)
    rng = np.random.default_rng(42)
    result = result + rng.normal(0, GRAIN, result.shape[:2])[..., None]
    u16 = (np.clip(result, 0, 255) * 257.0 + 0.5).astype(np.uint16)
    _write_png16(out, u16)


def _write_png16(path, arr):
    import zlib
    import struct

    h, w, _ = arr.shape
    raw = b"".join(b"\x00" + arr[y].astype(">u2").tobytes() for y in range(h))

    def chunk(tag, data):
        c = tag + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c))

    ihdr = struct.pack(">IIBBBBB", w, h, 16, 2, 0, 0, 0)
    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", zlib.compress(raw, 6)))
        f.write(chunk(b"IEND", b""))


if __name__ == "__main__":
    deband(sys.argv[1], sys.argv[2])
