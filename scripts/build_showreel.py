#!/usr/bin/env python3
"""Compile the Matthew Board motion + AI showreel."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
VID = ROOT / "public" / "videos"
OUT_DIR = Path("/tmp/showreel_build")
CARDS = OUT_DIR / "cards"
CLIPS = OUT_DIR / "clips"
FONT_DIR = Path("/home/mboard76/.local/share/fonts")

W, H, FPS = 1920, 1080, 24
BG = (5, 5, 8, 255)
WHITE = (240, 240, 245, 255)
MUTED = (136, 136, 153, 255)
CYAN = (0, 212, 255, 255)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "..." if len(cmd) > 8 else "")
    subprocess.run(cmd, check=True)


def new_card() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    img = Image.new("RGBA", (W, H), BG)
    return img, ImageDraw.Draw(img)


def text_width(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> int:
    return int(draw.textbbox((0, 0), text, font=fnt)[2])


def centered(draw: ImageDraw.ImageDraw, y: int, text: str, fnt: ImageFont.FreeTypeFont, fill) -> None:
    x = (W - text_width(draw, text, fnt)) // 2
    draw.text((x, y), text, font=fnt, fill=fill)


def save_card(img: Image.Image, name: str) -> Path:
    path = CARDS / name
    img.convert("RGB").save(path, "PNG")
    return path


def title_card() -> Path:
    img, draw = new_card()
    label = font("Futura-Condensed.ttf", 28)
    name = font("Futura-Extra-Black-Condensed-BT.ttf", 132)
    sub = font("Futura-Condensed.ttf", 36)

    centered(draw, 360, "SLEEKTIKI.AI", label, CYAN)
    centered(draw, 430, "MATTHEW BOARD", name, WHITE)
    line_w = 120
    draw.rectangle([((W - line_w) // 2, 600), ((W + line_w) // 2, 603)], fill=CYAN)
    centered(draw, 640, "MOTION GRAPHICS  +  CREATIVE AI", sub, MUTED)
    return save_card(img, "title.png")


def end_card() -> Path:
    img, draw = new_card()
    label = font("Futura-Condensed.ttf", 26)
    name = font("Futura-Extra-Black-Condensed-BT.ttf", 96)
    body = font("Futura-Condensed.ttf", 34)

    centered(draw, 340, "MATTHEW BOARD", name, WHITE)
    line_w = 120
    draw.rectangle([((W - line_w) // 2, 470), ((W + line_w) // 2, 473)], fill=CYAN)
    centered(draw, 520, "sleektiki.ai", body, CYAN)
    centered(draw, 580, "matt@sleektiki.ai", body, MUTED)
    centered(draw, 680, "ARTSTATION   ·   LINKEDIN   ·   GITHUB", label, MUTED)
    return save_card(img, "end.png")


def lower_third(index: str, chapter: str, title: str) -> Path:
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    # gradient bar
    for i, a in enumerate(range(170, 0, -2)):
        y = H - 220 + i
        draw.rectangle([(0, y), (W, y + 1)], fill=(5, 5, 8, min(200, a)))
    num = font("Futura-Condensed.ttf", 28)
    chap = font("Futura-Condensed.ttf", 22)
    ttl = font("Futura-Extra-Bold.ttf", 42)
    x = 80
    y = 860
    draw.text((x, y), index, font=num, fill=CYAN)
    draw.text((x + 70, y + 6), chapter, font=chap, fill=CYAN)
    draw.rectangle([(x, y + 42), (x + 56, y + 45)], fill=CYAN)
    draw.text((x, y + 56), title, font=ttl, fill=WHITE)
    path = CARDS / f"lt_{index}.png"
    img.save(path, "PNG")
    return path


def card_to_video(png: Path, seconds: float, dest: Path) -> None:
    run(
        [
            "ffmpeg",
            "-y",
            "-loop",
            "1",
            "-i",
            str(png),
            "-f",
            "lavfi",
            "-i",
            "anullsrc=channel_layout=stereo:sample_rate=48000",
            "-t",
            f"{seconds:.3f}",
            "-r",
            str(FPS),
            "-s",
            f"{W}x{H}",
            "-c:v",
            "libx264",
            "-preset",
            "fast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-shortest",
            str(dest),
        ]
    )


def fit_filter() -> str:
    return (
        f"scale={W}:{H}:force_original_aspect_ratio=increase,"
        f"crop={W}:{H},"
        "setsar=1,"
        f"fps={FPS},"
        "eq=brightness=0.04:contrast=1.06:saturation=1.08,"
        "format=yuv420p"
    )


def letterbox_blur_filter() -> str:
    # Keep the sides alive. Do not crush the picture into a cave.
    return (
        f"split[bg][fg];"
        f"[bg]scale={W}:{H}:force_original_aspect_ratio=increase,"
        f"crop={W}:{H},gblur=sigma=14,eq=brightness=0.06:saturation=1.05:contrast=1.04[b];"
        f"[fg]scale={W}:{H}:force_original_aspect_ratio=decrease[f];"
        f"[b][f]overlay=(W-w)/2:(H-h)/2,setsar=1,fps={FPS},"
        f"eq=brightness=0.03:contrast=1.05:saturation=1.06,format=yuv420p"
    )


def encode_base(
    src: Path,
    dest: Path,
    start: float,
    duration: float,
    letterbox: bool = False,
) -> None:
    vf = letterbox_blur_filter() if letterbox else fit_filter()
    fade_out_start = max(0.0, duration - 0.35)
    vf = f"{vf},fade=t=in:st=0:d=0.30,fade=t=out:st={fade_out_start:.3f}:d=0.30"
    run(
        [
            "ffmpeg",
            "-y",
            "-ss",
            f"{start:.3f}",
            "-t",
            f"{duration:.3f}",
            "-i",
            str(src),
            "-f",
            "lavfi",
            "-i",
            "anullsrc=channel_layout=stereo:sample_rate=48000",
            "-vf",
            vf,
            "-map",
            "0:v:0",
            "-map",
            "1:a:0",
            "-c:v",
            "libx264",
            "-preset",
            "fast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-shortest",
            "-t",
            f"{duration:.3f}",
            str(dest),
        ]
    )


def clip(
    src: Path,
    dest: Path,
    start: float,
    duration: float,
    overlay: Path | None = None,
    letterbox: bool = False,
) -> None:
    if overlay is None:
        encode_base(src, dest, start, duration, letterbox=letterbox)
        return

    raw = dest.with_name(dest.stem + "_raw.mp4")
    encode_base(src, raw, start, duration, letterbox=letterbox)
    fade_lt_out = min(3.4, duration - 0.6)
    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(raw),
            "-loop",
            "1",
            "-i",
            str(overlay),
            "-filter_complex",
            (
                "[1:v]format=rgba,"
                "fade=t=in:st=0.45:d=0.30:alpha=1,"
                f"fade=t=out:st={fade_lt_out:.3f}:d=0.30:alpha=1[lt];"
                "[0:v][lt]overlay=0:0:shortest=1[v]"
            ),
            "-map",
            "[v]",
            "-map",
            "0:a:0?",
            "-c:v",
            "libx264",
            "-preset",
            "fast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-shortest",
            "-t",
            f"{duration:.3f}",
            str(dest),
        ]
    )
    raw.unlink(missing_ok=True)


def mix_score(src: Path, dest: Path, crf: int = 20) -> None:
    """Lay an original instrumental under the picture, or keep silence."""
    score = Path("/tmp/showreel_build/score_72s.wav")
    if not score.exists():
        import shutil

        shutil.copy2(src, dest)
        return

    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(src),
            "-i",
            str(score),
            "-filter_complex",
            (
                "[1:a]loudnorm=I=-16:TP=-1.5:LRA=11,"
                "volume=0.58,afade=t=in:st=0:d=0.8,afade=t=out:st=38:d=3.2[a]"
            ),
            "-map",
            "0:v:0",
            "-map",
            "[a]",
            "-c:v",
            "libx264",
            "-preset",
            "slow",
            "-crf",
            str(crf),
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            "-shortest",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def concat(paths: list[Path], dest: Path, crf: int = 20) -> None:
    lst = OUT_DIR / "concat.txt"
    lst.write_text("".join(f"file '{p}'\n" for p in paths))
    run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(lst),
            "-c:v",
            "libx264",
            "-preset",
            "slow",
            "-crf",
            str(crf),
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-movflags",
            "+faststart",
            str(dest),
        ]
    )


def poster(src: Path, dest: Path, t: float = 8.0) -> None:
    run(
        [
            "ffmpeg",
            "-y",
            "-ss",
            f"{t:.2f}",
            "-i",
            str(src),
            "-frames:v",
            "1",
            "-q:v",
            "2",
            str(dest),
        ]
    )


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    CARDS.mkdir(exist_ok=True)
    CLIPS.mkdir(exist_ok=True)

    title_png = title_card()
    end_png = end_card()
    lt01 = lower_third("01", "CINEMATIC AI", "Chevrolet Colorado  ·  Bison Stampede")
    lt02 = lower_third("02", "CINEMATIC AI", "Cadillac Escalade  ·  Red Carpet")
    lt03 = lower_third("03", "CINEMATIC AI", "Chevrolet Blazer  ·  World Transitions")
    lt04 = lower_third("04", "MOTION", "Dearfoams  ·  EasyMellow")
    lt05 = lower_third("05", "CHARACTER", "Astronaut  ·  UE5 Path Tracing")
    lt06 = lower_third("06", "EXHIBITION", "Dusty  ·  CAC  ·  Blink 2026")

    title_v = CLIPS / "00_title.mp4"
    bison_v = CLIPS / "01_bison.mp4"
    escalade_v = CLIPS / "02_escalade.mp4"
    blazer_v = CLIPS / "03_blazer.mp4"
    dear_v = CLIPS / "04_dearfoams.mp4"
    astro_v = CLIPS / "05_astronaut.mp4"
    dusty_v = CLIPS / "06_dusty.mp4"
    end_v = CLIPS / "07_end.mp4"

    card_to_video(title_png, 1.2, title_v)
    clip(VID / "colorado_bison_stampede_v3_kling3.mp4", bison_v, 0.0, 5.0, overlay=lt01)
    clip(VID / "escalade_red_carpet_kling3.mp4", escalade_v, 0.0, 5.0, overlay=lt02)
    clip(VID / "blazer_transition_moving_kling3.mp4", blazer_v, 1.0, 6.0, overlay=lt03)
    # One continuous Dearfoams take. Do not split the animation.
    clip(VID / "artstation" / "easymellow-16x9.mp4", dear_v, 0.4, 14.0, overlay=lt04)
    clip(VID / "astronaut_light_sweep.mp4", astro_v, 0.0, 5.0, overlay=lt05)
    clip(VID / "dusty.mp4", dusty_v, 108.0, 3.2, overlay=lt06, letterbox=True)
    card_to_video(end_png, 2.4, end_v)

    pieces = [
        title_v,
        bison_v,
        escalade_v,
        blazer_v,
        dear_v,
        astro_v,
        dusty_v,
        end_v,
    ]

    silent = OUT_DIR / "reel_silent.mp4"
    master = VID / "matthew_board_reel_2026.mp4"
    web = VID / "matthew_board_reel_2026_web.mp4"
    poster_path = ROOT / "public" / "images" / "portfolio" / "reel_poster.jpg"

    concat(pieces, silent, crf=18)
    mix_score(silent, master, crf=18)
    mix_score(silent, web, crf=23)
    poster(bison_v, poster_path, 1.6)

    for p in (master, web):
        size_mb = p.stat().st_size / (1024 * 1024)
        print(f"{p.name}: {size_mb:.1f} MB")
    print("poster:", poster_path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
