# Sparks Netball UAE Website

A simple, static one-page website for Sparks Netball UAE. No build tools or frameworks, just HTML, CSS and vanilla JS.

## Structure

```
index.html          Main page (all sections)
css/style.css        Styling (navy/orange brand theme)
js/script.js          Nav toggle, gallery + lightbox
assets/logo/          Club logo + favicons
assets/img/full/       Full-size photos (used in lightbox)
assets/img/thumb/      Optimized thumbnails (used in gallery grid)
```

## Preview locally

From this folder, run a simple local server and open the printed URL:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

- All copy lives directly in `index.html`; edit text in place.
- Contact details (phone, socials) are in the `#join` section and the footer.
- To add/replace gallery photos: drop a new image into `assets/img/full/` and
  `assets/img/thumb/`, then add an entry to the `gallery-XX` naming pattern
  and bump `GALLERY_COUNT` in `js/script.js`.
- Brand colours are defined as CSS variables at the top of `css/style.css`
  (`--navy`, `--orange`, `--blue`, `--yellow`).

## Deploying

### Netlify
1. Push this folder to a GitHub repo (see below), or drag-and-drop the
   `website` folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop).
2. No build command needed; publish directory is `.` (the project root).

### GitHub Pages
1. Push this folder to a GitHub repo.
2. In the repo settings, enable Pages, source = `main` branch, root folder.

```
git init
git add .
git commit -m "Initial Sparks Netball UAE website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Current live setup (as of Aug 2026)

- **Repo:** `git@github.com:safiscollc/sparksnetballuae.git`, branch `main`.
- **Live site:** https://www.sparksnetball.com — hosted on **Netlify**, connected
  directly to the GitHub repo. Any push to `main` auto-deploys within ~1-2
  minutes. No manual Netlify steps needed for normal edits.
- **Auth:** pushes are authenticated via an **SSH key** registered to the
  `safiscollc` GitHub account (not username/password).

### Re-pulling this project on a new/different device

1. Clone it: `git clone git@github.com:safiscollc/sparksnetballuae.git`
   (or copy the existing `Sparks Netball/website` folder over directly).
2. Make sure the new device can authenticate to GitHub as `safiscollc`:
   - Generate an SSH key on the new device and add it under
     GitHub → Settings → SSH and GPG keys, **or**
   - Use `gh auth login` / a personal access token instead of SSH.
   - Without this, `git push` will fail even though the files are there.
3. Nothing to configure on Netlify's side — it watches the GitHub repo itself,
   not any specific machine, so once a push lands on `main` from an
   authenticated device, it deploys automatically.
4. (Optional) For local preview before pushing, run a simple server from the
   project folder, e.g. `python3 -m http.server 8811`, then visit
   `http://localhost:8811`.
