import json
import re
import os
import io
import html
import sys
import urllib.request
from PIL import Image

SITE = "/home/mboard76/sleektiki-website"
OUT_IMG = os.path.join(SITE, "public/images/artstation")
DATA = json.load(
    open(
        "/tmp/claude-1000/-home-mboard76/785434a9-76ef-4333-b382-893db357fb2d/scratchpad/artstation_data.json"
    )
)

CATEGORY = {
    "Batman": "characters",
    "Space Explorer": "characters",
    "Iggy Pop UE5|Sculpt|Keyshot Renders|Real-Time Character|Pure and the Damned Music Video": "characters",
    "Grizzly Bear UE4.24 Real Time Hair project": "creatures",
    "Tylosaurus (Mososaur)": "creatures",
    "Colombian Mammoth": "creatures",
    "White Rhino": "creatures",
    "Scout Mech": "hardsurface",
    "Expeditionary Scout Unit (ESU)": "hardsurface",
    "Kitbash Ship Project": "hardsurface",
    "ROV-33 (Rovee)": "hardsurface",
    "Educational Science Games": "gamedev",
    "Kamodo Steve: Janitor on Fire": "gamedev",
    "Health-Boost Prop": "gamedev",
    "Bio-luminescent Foliage": "gamedev",
    "Forams and Foram Dish": "gamedev",
    "Dragon Pillar: Architectural Mall | Godfrey Hotel, Boston, MA": "sculpts",
    "Creative Drive": "sculpts",
    "Study of Perseus Slaying Medusa": "sculpts",
    "Copy of Chardin Still Life": "sculpts",
}

SLUG_OVERRIDE = {
    "Iggy Pop UE5|Sculpt|Keyshot Renders|Real-Time Character|Pure and the Damned Music Video": "iggy-pop",
    "Dragon Pillar: Architectural Mall | Godfrey Hotel, Boston, MA": "dragon-pillar",
    "Kamodo Steve: Janitor on Fire": "kamodo-steve",
    "Expeditionary Scout Unit (ESU)": "esu",
    "Grizzly Bear UE4.24 Real Time Hair project": "grizzly-bear",
    "Tylosaurus (Mososaur)": "tylosaurus",
    "Study of Perseus Slaying Medusa": "perseus",
    "Copy of Chardin Still Life": "chardin-still-life",
}

TITLE_OVERRIDE = {
    "Iggy Pop UE5|Sculpt|Keyshot Renders|Real-Time Character|Pure and the Damned Music Video": "Iggy Pop",
    "Grizzly Bear UE4.24 Real Time Hair project": "Grizzly Bear",
    "Dragon Pillar: Architectural Mall | Godfrey Hotel, Boston, MA": "Dragon Pillar — Godfrey Hotel, Boston",
}


def slugify(t):
    s = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
    return s


def clean_desc(h):
    if not h:
        return ""
    h = re.sub(r"<br\s*/?>", "\n", h)
    h = re.sub(r"</p>\s*", "\n\n", h)
    h = re.sub(r"<[^>]+>", "", h)
    h = html.unescape(h)
    paras = [re.sub(r"\s+", " ", p).strip() for p in h.split("\n\n")]
    return "\n\n".join(p for p in paras if p)


def dl_optimize(url, dest, max_dim=1920, q=82):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    raw = urllib.request.urlopen(req, timeout=60).read()
    im = Image.open(io.BytesIO(raw))
    if im.mode in ("RGBA", "P", "LA"):
        im = im.convert("RGB")
    w, h = im.size
    if max(w, h) > max_dim:
        scale = max_dim / max(w, h)
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    im.save(dest, "WEBP", quality=q, method=6)
    return im.size


def iframe_src(embed):
    m = re.search(r'src=["\']([^"\']+)["\']', embed or "")
    return m.group(1) if m else None


projects_out = []
for det in DATA["details"]:
    title_raw = det["title"]
    slug = SLUG_OVERRIDE.get(title_raw) or slugify(title_raw)
    pdir = os.path.join(OUT_IMG, slug)
    os.makedirs(pdir, exist_ok=True)
    assets_out = []
    img_n = 0
    for a in sorted(det["assets"], key=lambda x: x["position"]):
        at = a["asset_type"]
        cap = re.sub(
            r"\s+", " ", re.sub(r"<[^>]+>", "", html.unescape(a.get("title") or ""))
        ).strip()
        if at == "cover":
            continue
        if at == "image":
            img_n += 1
            fn = f"{img_n:02d}.webp"
            dest = os.path.join(pdir, fn)
            if not os.path.exists(dest):
                try:
                    w, h = dl_optimize(a["image_url"], dest)
                except Exception as e:
                    print(f"  FAILED {a['image_url']}: {e}", file=sys.stderr)
                    continue
            else:
                w, h = Image.open(dest).size
            assets_out.append(
                {
                    "type": "image",
                    "src": f"/images/artstation/{slug}/{fn}",
                    "width": w,
                    "height": h,
                    "caption": cap,
                }
            )
        elif at in ("video", "model3d"):
            src = iframe_src(a.get("player_embedded"))
            if not src:
                continue
            kind = "sketchfab" if "sketchfab" in src else "youtube"
            assets_out.append(
                {
                    "type": kind,
                    "src": src.split("?")[0] if kind == "youtube" else src,
                    "caption": cap,
                }
            )
        elif at == "video_clip":
            # signed artstation embed expires; handled separately if mp4 retrievable
            print(f"  skipping video_clip in {title_raw}: {cap}", file=sys.stderr)

    if not assets_out:
        continue
    cover = next((x for x in assets_out if x["type"] == "image"), None)
    projects_out.append(
        {
            "slug": slug,
            "title": TITLE_OVERRIDE.get(title_raw, title_raw),
            "category": CATEGORY.get(title_raw, "sculpts"),
            "description": clean_desc(det.get("description")),
            "software": [s["name"] for s in det.get("software_items", [])],
            "tags": det.get("tags", []),
            "cover": cover["src"] if cover else "",
            "coverAspect": (cover["width"] / cover["height"]) if cover else 1.5,
            "assets": assets_out,
        }
    )
    print(f"{title_raw}: {len(assets_out)} assets", file=sys.stderr)

with open(
    "/tmp/claude-1000/-home-mboard76/785434a9-76ef-4333-b382-893db357fb2d/scratchpad/art_projects.json",
    "w",
) as f:
    json.dump(projects_out, f, indent=2)
print(f"done: {len(projects_out)} projects", file=sys.stderr)
