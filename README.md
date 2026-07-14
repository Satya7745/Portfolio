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

## Customize

- Theme variables are at the beginning of `styles.css`.
- Portfolio copy and case studies live in `index.html`.
- Role-loop text and interaction timing live in `script.js`.
- The portfolio supports `?scoutTheme=light` and `?scoutTheme=dark` for deterministic previews.

---
Built with intent by Akella Satya Vijay.
