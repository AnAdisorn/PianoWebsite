# Music Circle

A static promotional website for musicians connected to an institute, its alumni network, and external collaborators.

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

- Replace `Music Circle` with the institute or project name.
- Update the musician cards in `index.html`.
- Replace placeholder contact email `music@example.org`.
- Add real event dates, submission requirements, and media links.
- Replace donation mail links with official institute donation or payment URLs.
- Use `PROFILE_TEMPLATE.md` to collect consistent profile details before publishing real artists.

## Generated Asset

The hero image was generated for this project and saved at `assets/hero-musicians.png`.
