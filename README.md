# Birthday Gift — Deployment & Sharing

This is a simple static site located at the project root. Two quick ways to make it publicly accessible:

- GitHub Pages (recommended for a free, permanent public link)
- Netlify / Vercel (easy drag-and-drop or Git integration)

Quick steps to publish with GitHub Pages:

1. Create a new GitHub repository (for example `birthday-gift`).
2. In your local project folder (`birthday-gift`) run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO>.git
git push -u origin main
```

3. The included GitHub Actions workflow will deploy the repository to the `gh-pages` branch automatically on push to `main`.

4. After the workflow finishes (check the Actions tab), your site will be available at:

```
https://<YOUR_USERNAME>.github.io/<REPO>/
```

Notes:
- If your repo uses a different default branch name, update `.github/workflows/deploy.yml` accordingly.
- The workflow publishes the repository root. If you only want to publish a subfolder, update the `publish_dir` value in the workflow.

Alternative quick options:
- Netlify: drag-and-drop the `birthday-gift` folder to Netlify Drop (https://app.netlify.com/drop) or connect your GitHub repo.
- Vercel: connect your GitHub repo and deploy.

Local testing:

```powershell
# from the project folder
python -m http.server 8000
# then open http://localhost:8000
```

If you want, I can also create a Netlify _redirects_ file or set the workflow to publish a different folder — tell me which option you prefer.
