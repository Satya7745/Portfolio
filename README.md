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
- Closed-domain portfolio agent that works directly on GitHub Pages from a bundled, verified knowledge base

## Structure

```
portfolio/
├── index.html          # semantic content and case studies
├── styles.css          # responsive theme, layout, and motion
├── script.js           # reveals, counters, accordions, agent UI, and backend bridge
├── agent-knowledge.js  # approved portfolio facts and closed-domain policy
├── profile-color.jpg   # locally hosted color portrait
├── google-apps-script/ # no-package Gemini proxy source
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

The bottom-right agent has two protected modes:

- **Gemini mode:** GitHub Pages calls the deployed Google Apps Script web app using JSONP. Apps Script reads `GEMINI_API_KEY` from Script Properties, retrieves only approved facts, calls Gemini, validates cited fact IDs, and returns a sanitized answer.
- **Verified fallback:** If Gemini or the backend is unavailable, `agent-knowledge.js` answers from the same approved facts without browsing or external calls.

Both layers reject unrelated questions, prompt injection, secret-bearing messages, and unsupported claims. The browser keeps no persistent conversation history.

### Apps Script deployment

1. Copy `google-apps-script/Code.gs` into an Apps Script project.
2. Add `GEMINI_API_KEY` under **Project settings → Script properties**.
3. Deploy as **Web app**, execute as the owner, and set access to **Anyone**.
4. Put the `/exec` URL in the `data-endpoint` attribute on `#portfolioAgent`.

Never put a Gemini API key in `index.html`, `script.js`, or any committed config file. The `.gitignore` excludes local environment files.

## Customize

- Theme variables are at the beginning of `styles.css`.
- Portfolio copy and case studies live in `index.html`.
- Headline-loop text and timing live in `index.html` and `styles.css`.
- Portfolio-only facts and scope policy live in `agent-knowledge.js`.
- The portfolio supports `?scoutTheme=light` and `?scoutTheme=dark` for deterministic previews.

---
Built with intent by Akella Satya Vijay.
