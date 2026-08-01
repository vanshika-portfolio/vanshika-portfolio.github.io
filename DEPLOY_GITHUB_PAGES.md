# Hosting this site on GitHub Pages

This project is a server-rendered app, so it is exported to plain static files
before GitHub Pages can serve it. Everything needed is already in the repo:

- `.github/workflows/deploy.yml` — builds and deploys on every push to `main`
- `scripts/build-pages.mjs` — the static export (writes `dist/pages/`)

## One-time setup on GitHub

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`**
2. **Settings → Actions → General → Workflow permissions: Read and write**
3. **Settings → Secrets and variables → Actions → New repository secret**, add both:

   | Name | Value |
   | --- | --- |
   | `VITE_SUPABASE_URL` | value from the project's `.env` |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | value from the project's `.env` |

   These are public, browser-safe keys — they are only needed so the "Request
   résumé" form keeps working. Skip them and the site still deploys; only the
   form stops saving.
4. Push to `main` (or **Actions → Deploy to GitHub Pages → Run workflow**).

The site appears at `https://<username>.github.io/<repo>/`.

## Notes

- The URL sub-path is handled automatically — no config needed if you rename the
  repo, and it also works for a `<username>.github.io` repo or a custom domain.
- `404.html` is a copy of the homepage so refreshes and deep links never break.
- To test the export locally:

  ```bash
  PAGES_BASE=/your-repo-name/ npm run build:pages
  npx serve dist/pages   # then open the /your-repo-name/ path
  ```

- The résumé form writes directly to the database from the browser on static
  hosting. The table's security rules allow inserts only — nobody can read
  submitted requests from the client.
