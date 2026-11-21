# Asadzoda Sanjar — Portfolio (React + Tailwind CSS)

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## What to edit
- `src/data.js`  — all content (projects, skills, education, certificates, links). Texts are [English, Тоҷикӣ, Русский].
- `src/i18n.js`  — interface texts in three languages.

## Files you add later (put them in `public/`)
- `public/profile/photo.png`                  — your photo
- `public/cv/Asadzoda_Sanjar_CV.pdf`          — your CV (replace the file to update it)
- `public/projects/<id>/<id>.png`            — project images; ids: anyvoice, messenger0, capsulix, portfolio
- `public/certificates/python_basic_certificate.pdf` — then set `status: 'ready'` in `src/data.js`

Until a file exists, the site shows a clean placeholder (initials, project name, "result pending").

## Deploy on Render (Static Site)
1. Push this folder to GitHub (the `portfolio` repo).
2. Render → New → Static Site → select the repo.
3. Build Command: `npm install && npm run build`   Publish Directory: `dist`
4. Settings → Custom Domains → add `sanjar.world` and set the DNS records Render shows.
Navigation uses `#/tab` links, so no rewrite rules are needed.
