"""Deband dark spotlight-gradient renders (Batman set, images 01-09).

The ArtStation source JPEGs band in the smooth background falloff. This
reconstructs the gradient with a float-precision wide gaussian restricted to
flat regions (character/edges protected by a local-contrast mask), adds fine
grain so 8-bit quantization can't re-band, and saves LOSSLESS WebP. The page
must serve these files without re-encoding (next/image `unoptimized`), or a
lossy pass will strip the grain and bring the banding back.

Usage: python3 deband_spotlight.py <src.jpg> <out.webp>
"""

import sys
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter


def deband(src, out, max_dim=2560):
    im = Image.open(src).convert("RGB")
    a = np.asarray(im, dtype=np.float32)
    small = gaussian_filter(a, sigma=(6, 6, 0))
    detail = np.abs(a - small).max(axis=2)
    flat = gaussian_filter((detail < 2.5).astype(np.float32), sigma=15)[..., None]
    wide = gaussian_filter(a, sigma=(90, 90, 0))
    result = wide * flat + a * (1 - flat)
    rng = np.random.default_rng(42)
    result = np.clip(result + rng.normal(0, 0.9, result.shape), 0, 255)
    img = Image.fromarray(result.astype("uint8"))
    w, h = img.size
    if max(w, h) > max_dim:
        s = max_dim / max(w, h)
        img = img.resize((round(w * s), round(h * s)), Image.LANCZOS)
    img.save(out, "WEBP", lossless=True, quality=100, method=6)


if __name__ == "__main__":
    deband(sys.argv[1], sys.argv[2])
