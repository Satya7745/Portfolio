# Akella Satya Vijay — Portfolio

A hand-built, single-page portfolio for a **Forward Deployed AI Engineer**.
No frameworks, no templates — just HTML, CSS, and vanilla JavaScript.

**Live:** _add your GitHub Pages URL here_

## Highlights

- Animated particle constellation + aurora background (canvas + CSS)
- Custom cursor, 3D tilt cards, spotlight hover, magnetic buttons
- Scroll-reveal animations, animated impact counters, typing role rotator
- Fully responsive, accessible, and `prefers-reduced-motion` aware
- Zero dependencies (only Google Fonts)

## Structure

```
portfolio/
├── index.html   # markup + content
├── styles.css   # theme, layout, animations
├── script.js    # cursor, particles, reveals, counters, tilt
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

- Colors live in the `:root` block of `styles.css` (`--accent`, `--accent-2`, `--grad`).
- Content is all in `index.html` — edit the section markup directly.
- Motion settings (particle count, tilt strength) are near the top of the relevant blocks in `script.js`.

---
Built with intent by Akella Satya Vijay.
