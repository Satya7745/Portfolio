# Akella Satya Vijay - Portfolio

A hand-built, single-page portfolio for a **Forward Deployed AI Engineer**.
No frameworks or templates: HTML, CSS, and vanilla JavaScript.

**Live:** https://satya7745.github.io/Portfolio/

## Highlights

- Recruiter-first narrative for Microsoft client work, production AI systems, and measurable impact
- Security-casebook layout with a focused Microsoft security narrative and full-color portrait
- Pure-CSS rotating engineering-focus headline, scroll reveals, and impact counters
- Seven concrete technical case studies with on-demand architecture details
- High-contrast production-impact and contact chapters
- Fully responsive, accessible, and `prefers-reduced-motion` aware
- Zero runtime dependencies and no external font requests

## Structure

```
portfolio/
├── index.html          # semantic content and case studies
├── styles.css          # responsive theme, layout, and motion
├── script.js           # reveals, counters, accordions
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

## Customize

- Theme variables are at the beginning of `styles.css`.
- Portfolio copy and case studies live in `index.html`.
- Headline-loop text and timing live in `index.html` and `styles.css`.
- The portfolio supports `?scoutTheme=light` and `?scoutTheme=dark` for deterministic previews.

---
Built with intent by Akella Satya Vijay.
