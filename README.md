# REFORM-3D project website

A compact research project page for REFORM-3D, built with HTML, CSS, and JavaScript. No dependencies or build step are required.

- [Website](https://endarzboy.github.io/reform3d-website/)
- [Evaluation code and documentation](https://github.com/Endarzboy/REFORM3D)

## Files

- `index.html`: research content, results, and citation.
- `styles.css`: styling and responsive layouts.
- `script.js`: dataset selection, clipboard controls, and optional lab-logo display.
- `assets/`: figures, favicon, resource badges, and downloadable BibTeX. The optional lab logo belongs at `assets/cvml_ku_lab.png`.

The page presents the paper header, abstract, framework, Med3DINO corpus, selected manuscript findings, usage, and citation. Geometry and interpretation notes expand inline. Dataset selectors retain all result rows; without JavaScript, datasets remain accessible through expandable sections.

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
- Replace the Paper badge’s repository placeholder with the public paper URL when available. Update its label in `assets/badge-paper.svg` and its accessible description in `index.html` together.
- Replace the Checkpoints badge’s Hugging Face placeholder with the published model collection URL when available.
- Resource badges are local SVGs, so they work without an external badge service.
