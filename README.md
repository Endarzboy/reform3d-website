# REFORM-3D project website

A static research website for REFORM-3D, built with HTML, CSS, and JavaScript. No dependencies or build step are required.

- [Website](https://endarzboy.github.io/reform3d-website/)
- [Evaluation code and documentation](https://github.com/Endarzboy/REFORM3D)

## Files

- `index.html`: research content, results, and citation.
- `styles.css`: styling and responsive layouts.
- `script.js`: navigation, dataset selection, and clipboard controls.
- `assets/`: figures, favicon, lab logo, and downloadable BibTeX.

## Preview

Run from this folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. Clipboard controls require HTTPS or localhost.

## Publish

Keep the website files and complete `assets/` directory at the repository root. In GitHub **Settings → Pages**, select **Deploy from a branch**, **main**, and **/ (root)**. Updates publish when pushed to `main`.

Update the canonical and sharing URLs in `index.html` if the website address changes.

## Maintain

- Preserve dataset, feature-interface, protocol, and uncertainty descriptions when updating manuscript results.
- Keep the displayed citation in `index.html` synchronized with `assets/reform3d.bib`.
- Replace the Paper button’s repository placeholder with the public paper URL when available.
