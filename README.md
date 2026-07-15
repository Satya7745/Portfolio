# Akella Satya Vijay - Portfolio

A hand-built, single-page portfolio for a **Forward Deployed AI Engineer**.
No frameworks or templates: HTML, CSS, and vanilla JavaScript.

**Live:** _add your GitHub Pages URL here_

## Highlights

- Recruiter-first narrative for Microsoft client work, production AI systems, and measurable impact
- Full-color local portrait with animated system orbits, scan treatment, and pointer depth
- Kinetic hero typography, rotating engineering-focus copy, moving credential rail, and impact counters
- Seven concise case studies with smooth, on-demand architecture details
- Warm charcoal, ivory, rose, and amber palette with no visible blue treatment
- Fully responsive, accessible, and `prefers-reduced-motion` aware
- Zero runtime dependencies and no external font requests
- Closed-domain portfolio agent that works directly on GitHub Pages from a bundled, verified knowledge base

## Structure

```
portfolio/
├── index.html          # semantic content and case studies
├── styles.css          # responsive theme, layout, and motion
├── script.js           # reveals, counters, role loop, accordions, and parallax
├── profile-color.jpg   # locally hosted color portrait
└── README.md
```

## Run locally

```bash
# from the portfolio folder
python -m http.server 5500
# then open http://localhost:5500
```
Or open `index.html` directly, or use the VS Code Live Server extension.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages → Source: `main` branch / root**.
3. Wait a minute, then visit the published URL.

The included `.nojekyll` file keeps GitHub Pages in plain static-file mode. All production assets use relative URLs, so the site works correctly under the `/Portfolio/` project path.

## Portfolio Agent

The bottom-right agent has two modes:

- **GitHub Pages:** Uses `agent-knowledge.js` locally. It answers only about Satya's approved professional information, makes no network requests, stores no conversation, and rejects unrelated questions, prompt injection, and secrets.
- **Optional Gemini backend:** `api/chat.js` is a serverless proxy that reads `GEMINI_API_KEY` from a protected environment variable. This requires an external serverless host because GitHub Pages cannot safely hide API keys or execute server code.

Never put a Gemini API key in `index.html`, `script.js`, or any committed config file. The `.gitignore` excludes local environment files.

## Customize

- Theme variables are at the beginning of `styles.css`.
- Portfolio copy and case studies live in `index.html`.
- Role-loop text and interaction timing live in `script.js`.
- Portfolio-only facts and scope policy live in `agent-knowledge.js`.
- The portfolio supports `?scoutTheme=light` and `?scoutTheme=dark` for deterministic previews.

---
Built with intent by Akella Satya Vijay.
