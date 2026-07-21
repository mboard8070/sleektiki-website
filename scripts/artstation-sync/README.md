# ArtStation sync

Re-syncs the /3d-art page from artstation.com/matthewboard.
ArtStation is behind Cloudflare, so the fetch uses Playwright (curl/plain HTTP gets a 403 challenge).

1. `python3 fetch_artstation.py artstation_data.json` — scrapes all projects + asset metadata via headless Chromium.
2. `python3 build_art_assets.py` — downloads images from the (unblocked) CDN, converts to WebP max 1920px, writes public/images/artstation/ and art_projects.json. Note: paths inside the scripts point at the session scratchpad; adjust to run from this directory.
3. Regenerate app/3d-art/artData.ts from art_projects.json (category/slug/title maps live in build_art_assets.py).
