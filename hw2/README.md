# HW2 — Personal Brand Portfolio
**Denis Tiparu Mario Mihai** · Web Design 2025–2026 · UVT Timișoara

---

## Links

- **Repository:** https://github.com/CS-WD-UVT-2026/hw2-wd-ie-denistiparu06-bit
- **Live site:** https://denistiparu06-bit.github.io/hw2-portfolio/

---

## Chosen Scenario

**Personal Brand Portfolio + CV** — A multi-page personal portfolio website presenting my profile, skills, academic projects, and contact information as a first-year Computer Science student at UVT Timișoara.

---

## HW1 Requirements Checklist

- [x] `index.html` — home page with skip link, header, nav, main (3 sections), footer
- [x] `about.html` — content page with education, skills, and interests
- [x] `data.html` — data page with a table of projects (6 rows, captions, `<th>` with scope)
- [x] `contact.html` — form page with 5+ controls, fieldset/legend, explicit labels, required fields
- [x] `styles.css` — one external stylesheet used by all pages
- [x] Semantic structure on every page: `<header>`, `<nav>`, `<main>`, `<footer>`, one `<h1>`, logical heading order
- [x] Navigation works in both directions on all pages
- [x] Form accessibility: explicit labels, fieldset/legend grouping, required attributes, keyboard-friendly
- [x] Table: minimum 4 data rows (excluding header), `<th>` with scope, `<caption>`
- [x] HTML and CSS validated with no errors
- [x] Published on GitHub Pages

---

## HW2 Requirements Checklist

- [x] **HW1 copied and working** — all HW1 pages present and functional as the starting point
- [x] **`specificity.html`** — exact CSS Specificity Game code from Lab 4 Exercise 1, copied as required
- [x] **`specificity.txt`** — answers to all three specificity questions (per-paragraph analysis, color/font-family cascade explanation, external vs internal CSS cascade order)
- [x] **`style.css`** — external stylesheet for h1 used in specificity exercise
- [x] **CSS placement demonstrated** — external CSS (`styles.css`), internal CSS (`<style>` in `index.html` and `overview.html`), inline CSS (`style=""` attribute in `about.html`)
- [x] **CSS improvements** — `:nth-child` on table rows, box model spacing, consistent typography hierarchy, hover effects, focus styles
- [x] **`card.html` + `card.css`** — business card with avatar, full name, specialisation + year, email link, GitHub link; demonstrates element, class, and id selectors (at least 2 examples each)
- [x] **`overview.html`** — responsive profile/overview page using CSS Grid for main layout, Flexbox for sidebar and skills areas, one media query (switches to single-column below 720px), 4 project cards with one styled differently (featured dark card)
- [x] **Figma UI design** — two-panel UVT authentication interface built in Figma; reusable Button component used in 2 places; 2 text styles (Heading, Body) and 3 color styles (Brand Navy, Accent Blue, White) defined; exported CSS saved as `figma-auth.css`; screenshot saved as `assets/figma-auth-screenshot.png`
- [x] **`chatbot.html` + `chatbot.css` + `chatbot.js`** — working chatbot with question bank (10 questions as array of objects), dynamic DOM updates via `document.createElement` + `appendChild`, form submit event handling, input cleared after submit, suggested questions panel
- [x] Navigation updated on all pages — links to `overview.html` and `chatbot.html` added
- [x] All updated HTML and CSS validated with no errors
- [x] Published on GitHub Pages

---

## File Structure

```
hw2/
├── index.html              # Home page (HW1)
├── about.html              # About/content page (HW1)
├── data.html               # Projects table page (HW1)
├── contact.html            # Contact form page (HW1)
├── styles.css              # Main external stylesheet (all pages)
├── specificity.html        # Lab 4 Exercise 1 — CSS Specificity Game (HW2)
├── specificity.txt         # Specificity answers (HW2)
├── style.css               # External h1 stylesheet for specificity exercise (HW2)
├── card.html               # Business card page (HW2)
├── card.css                # Business card stylesheet (HW2)
├── overview.html           # Responsive Grid + Flexbox overview page (HW2)
├── chatbot.html            # Chatbot page (HW2)
├── chatbot.css             # Chatbot stylesheet (HW2)
├── chatbot.js              # Chatbot logic — question bank + DOM events (HW2)
├── figma-auth.css          # Exported CSS from Figma authentication UI (HW2)
└── assets/
    ├── figma-auth-screenshot.png   # Screenshot of Figma authentication frame (HW2)
    ├── fundalLOGARE.png            # Background image used in Figma design
    └── LogoUVT.png                 # UVT logo used in Figma design
```

---

## Generative AI Transparency Declaration

This project was developed with the assistance of generative AI tools (Claude by Anthropic) in accordance with the UVT course policy. AI was used to help generate HTML, CSS, and JavaScript code. All submitted work has been reviewed and understood by the student.

> Declaration submitted separately via the course transparency form.

---

## Known Limitations

- The business card uses a placeholder avatar image; a real photo was not available at submission time.
- The Figma authentication frame was built using the provided course assets (`fundalLOGARE.png`, `LogoUVT.png`).
- `specificity.html` includes the internal CSS `h1` rule inside `<style>` as required by Lab 4 Exercise 1 Question 3; this is intentional and not an error.
