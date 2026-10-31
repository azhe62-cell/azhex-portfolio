# AZHEX — Aijaz Ali portfolio

Static multi-page site (HTML, CSS, JS). **No build step and no dependencies.**

## Structure
- `index.html`, `projects.html`, `about.html`, `certificates.html`, `contact.html`, `404.html`
- `assets/css/style.css` — design tokens and styles (colours are CSS variables at the top)
- `assets/js/main.js` — theme toggle, reveals, parallax, certificate viewer, rule-based chatbot
- `assets/img/` — photo and certificate images
- `vercel.json` — clean URLs (`/projects` instead of `/projects.html`)

## Run locally
Open `index.html` in a browser, or run `npx serve .` inside this folder.

## Deploy to Vercel (recommended)
1. Create an empty repo on GitHub, then in this folder run:
   ```
   git init
   git add .
   git commit -m "AZHEX portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/azhex-portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New → Project** → import the repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.
4. Every later `git push` redeploys automatically.

CLI alternative: `npm i -g vercel`, then `vercel login`, then `vercel --prod` inside this folder.

## Add another certificate
Put the image in `assets/img/` and copy one of the `.cred` cards in `certificates.html` (the last card is a reserved slot).
Do not publish images that show your CNIC number; blur it first.

## Chatbot
`assets/js/main.js` contains a keyword-matching bot (not AI). Edit its answers in the `A` array.
