# REFORM-3D project website

A static research website for REFORM-3D. It uses plain HTML, CSS, and JavaScript with local figure assets and no build step.

## Preview

Open this folder in your editor and use its local browser preview. For an HTTP preview, run from this folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. Clipboard buttons require a secure context such as HTTPS or localhost. Without clipboard access, commands remain selectable. Navigation and expandable content work without JavaScript.

## Move and publish

Copy `index.html`, `styles.css`, `script.js`, and the complete `assets/` directory into the root of the standalone website repository. Keep that repository’s Git metadata. GitHub Pages can publish `main` from `/ (root)` without a custom build.

The canonical and sharing URLs currently point to `https://endarzboy.github.io/reform3d-website/`. Update those URLs in `index.html` if the address changes.

## Content

The abstract, geometric policies, selected results, and acknowledgment follow the supplied manuscript. Selected tables show VoCo, 3DINO, SAM-Med3D, Hi-End-MAE, MiM, and GL-MAE alongside the controlled Med3DINO comparison. Dataset selectors expose the selected source-table columns, with native external interfaces, GAP for 3DINO/Med3DINO, alternative CLS readouts, and reported mean ± SD. They summarize paper results; the public KiTS23/MMWHS workflow is documented separately under “Use REFORM-3D.”

Preserve the protocol descriptions and uncertainty when updating results. Add publication and citation links only when their details are confirmed.

## Citation and lab identity

`assets/reform3d.bib` contains the supplied citation. The same entry appears in the citation section with copy and download controls. Update both together when citation details change.

The footer uses the local CVML-KU logo at `assets/cvml_ku_lab.png`. Include that file when moving or publishing the website. The corpus section reports manuscript pretraining statistics, separately from evaluation datasets and public release assets.
