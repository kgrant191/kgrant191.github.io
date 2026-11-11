# NES HD Collection

A static showcase for Goonie's public NES HD graphics packs.

## Publish with GitHub Pages

1. Create a **public** repository under `kgrant191` named **kgrant191.github.io**. Add a README when creating it so it has a `main` branch.
2. Upload the contents of this folder to the repository root: `index.html`, `styles.css`, `site.js`, `favicon.svg`, and the complete `assets` folder. Include `.nojekyll` if using Git. Replace the initial README with this one if desired. Do not upload the containing folder itself or the ZIP.
3. Open **Settings → Pages**. Set Source to **Deploy from a branch**, choose **main** and **/ (root)**, then Save.
4. Once GitHub finishes deploying, open **https://kgrant191.github.io/**.

No build command, dependencies, API key, custom domain, or paid plan is needed. If that repository already exists, review its contents before replacing any existing site.

## Preview

Open `index.html` in a browser. Images, navigation, FAQs, and the saved versioned downloads work locally. The latest-release lookup uses GitHub's public API; if unavailable, known release links remain usable.

## Files

- `index.html`: game cards, release links, installation instructions, About, and FAQ.
- `styles.css`: desktop and mobile layout.
- `site.js`: before/after toggle and latest-release asset lookup.
- `assets/`: bundled screenshots and comparison images, requiring no third-party image hosting.

## Current public projects

- Bad Dudes HD v1.0.0
- Holy Diver HD v1.0.1
- Jaws HD v1.0.0
- Top Gun HD v1.0.1

Releases and install ZIP filenames were verified against the public GitHub API on November 11, 2026. The site links to the complete release history for every game.

## Maintaining downloads

On each page load, the site checks `/repos/kgrant191/REPO/releases/latest`. It selects an asset only when its filename matches `repo_name_TAG.zip` (case-insensitive), e.g. `Bad_Dudes_HD_v1.0.0.zip`. This avoids selecting screenshots or source archives. GitHub rate limits or failed checks leave the saved HTML download links intact. Keep fallback URLs and version labels in `index.html` updated when publishing releases. If asset naming changes, adjust the matcher in `site.js`.

To add a game, copy a game-card article, give it a unique id and data-repo, update its content and links, provide before/after screenshot assets, and adjust the two collection counts. Verify the repository and release are publicly accessible first.

## Screenshot provenance

The full comparison images come from the public project repositories. The WebP thumbnails are crops of their original and HD panels, not new game artwork.

- `bad-dudes-hd/docs/images/before-after-street.png`
- `holy-diver-hd/docs/images/Holy_Diver_HD_Before_After_01_Gothic_Chapel.png`
- `jaws-hd/docs/images/03-shark-encounter.jpg`
- `top-gun-hd/docs/images/Top_Gun_HD_Before_After_01_Carrier_Launch.png`

Installation copy is based on each project's current README. The website now leads with the built-in installer and includes troubleshooting, Windows/macOS paths and tested full-file ROM SHA-1 values. Installation screenshots were provided by Goonie.

Unofficial fan projects. Original game assets and trademarks belong to their respective owners. No ROMs or emulator binaries are included.

