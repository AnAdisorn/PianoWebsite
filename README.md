# MPI-Dresden Music Society

A concise static website for the MPI-Dresden music society, including future events, past event records, and piano donation support.

## Preview

Open `index.html` in a browser, or serve the folder with any static web server.

## Deploy to GitHub Pages

1. Create an empty GitHub repository.
2. Add it as the remote for this local repo:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   ```

3. Push the `main` branch:

   ```bash
   git push -u origin main
   ```

4. In GitHub, open the repository, then go to **Settings > Pages** and set **Source** to **GitHub Actions**.

The included `.github/workflows/pages.yml` workflow deploys the static site whenever `main` is pushed.

## Customize

- Replace placeholder society, event, and donation text in `index.html`.
- Replace event photos or album covers in `assets/Photos/`.
- Replace recording links in `assets/Records/`.
- Replace `#donation-link` with the official institute donation URL.

## Generated Asset

The hero image was generated for this project and saved at `assets/hero-musicians.png`.
