# SleekTiki Portfolio

Portfolio and case-study site for AI tools, Unreal Engine plugins, game projects, installation work, and generated visual portfolios.

## Case Study

**Problem:** My work spans AI engineering, local LLM infrastructure, Unreal Engine tools, mobile apps, games, and visual production. A standard resume or repo list does not show how those projects connect or what each one proves.

**What I built:** A Next.js portfolio site with detailed project pages, filtered project cards, image/video galleries, case-study sections, architecture diagrams, training metrics, and dedicated setup/docs pages for MAUDE.

**Architecture:** The site uses Next.js App Router, React, TypeScript, Framer Motion, Three.js support, static project data, and curated media under `public/images`, `public/videos`, and generated splat assets.

**Technical depth:** Project pages support reusable content blocks for screenshots, videos, architecture diagrams, feature lists, training metrics, role matrices, changelogs, panoramas, and external links. The MAUDE and Code Assistant LoRA pages use richer structured sections than simple portfolio cards.

**Proof:** The site includes case studies for MAUDE, Code Assistant LoRA, MAUDE Mobile, Pixelus, Stillion LoRA, Machina Prima, Unreal Engine plugins, Tessera, Article-Gen, games, installations, and AI-generated visual portfolios.

**Tradeoffs:** The project keeps portfolio content as typed source data instead of a CMS. That makes the site easy to version with code and lets project pages evolve alongside the repos they describe.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Framer Motion
- Three.js / React Three Fiber
- Tailwind CSS 4

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
