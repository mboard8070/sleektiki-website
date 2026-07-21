import json
import sys
import time
from playwright.sync_api import sync_playwright

USER = "matthewboard"
OUT = sys.argv[1] if len(sys.argv) > 1 else "artstation_data.json"

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True, args=["--disable-blink-features=AutomationControlled"]
    )
    ctx = browser.new_context(
        user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        viewport={"width": 1440, "height": 900},
        locale="en-US",
    )
    page = ctx.new_page()
    page.goto(
        f"https://www.artstation.com/{USER}",
        wait_until="domcontentloaded",
        timeout=60000,
    )
    # give cloudflare time to clear
    for _ in range(12):
        time.sleep(2)
        title = page.title()
        if "Just a moment" not in title and "Attention" not in title:
            break
    print("page title:", page.title(), file=sys.stderr)

    def fetch_json(url):
        return page.evaluate(
            """async (url) => {
                const r = await fetch(url, {headers: {'Accept': 'application/json'}});
                if (!r.ok) return {__error: r.status};
                return await r.json();
            }""",
            url,
        )

    projects = []
    pg = 1
    while True:
        data = fetch_json(
            f"https://www.artstation.com/users/{USER}/projects.json?page={pg}"
        )
        if isinstance(data, dict) and data.get("__error"):
            print("error on page", pg, data, file=sys.stderr)
            break
        batch = data.get("data", [])
        projects.extend(batch)
        total = data.get("total_count", 0)
        print(
            f"page {pg}: {len(batch)} projects (total_count={total})", file=sys.stderr
        )
        if len(projects) >= total or not batch:
            break
        pg += 1
        time.sleep(1)

    # fetch full detail (assets, description) per project
    details = []
    for i, pr in enumerate(projects):
        hid = pr["hash_id"]
        d = fetch_json(f"https://www.artstation.com/projects/{hid}.json")
        if isinstance(d, dict) and d.get("__error"):
            print("detail error", hid, d, file=sys.stderr)
            continue
        details.append(d)
        print(
            f"detail {i + 1}/{len(projects)}: {d.get('title')} ({len(d.get('assets', []))} assets)",
            file=sys.stderr,
        )
        time.sleep(0.6)

    with open(OUT, "w") as f:
        json.dump({"projects": projects, "details": details}, f, indent=2)
    print(f"saved {len(details)} project details to {OUT}", file=sys.stderr)
    browser.close()
