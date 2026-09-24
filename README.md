# Alberta Referendum 2026 — Grade 7 Social Studies

Classroom website with the official Alberta October 19, 2026 referendum questions beside Grade 7 wording, plus a searchable glossary.

School colours: navy (`#001F3F`) and Arizona blue (`#0C234B`).

## Live site (after you enable Pages)

Once GitHub Actions has deployed successfully:

`https://<your-github-username>.github.io/<repo-name>/`

## Deploy with GitHub Actions

1. Create a new **public** GitHub repository (or private if your plan supports Pages on private repos).
2. Upload this folder (or push with git):
   ```bash
   git init
   git add .
   git commit -m "Initial Alberta referendum Grade 7 site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and confirm **Deploy to GitHub Pages** succeeds (or run **workflow_dispatch** manually).
5. Open the Pages URL from the workflow summary or **Settings → Pages**.

Every push to `main` redeploys automatically.

## Local preview

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

## Notes

- Question numbers **1–10** match Elections Alberta’s official order.
- Grade 7 wording is for classroom understanding only; the official ballot uses the original wording.
- Image credits are listed in the site footer (Wikimedia Commons sources).
