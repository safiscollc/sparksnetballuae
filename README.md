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
