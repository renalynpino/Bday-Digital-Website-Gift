# Note from Renalyn — About This Site

Hi — this is a small surprise website I made as a birthday gift.

Repository: https://github.com/renalynpino/Bday-Digital-Website-Gift

How I publish (what I already did):

1. I pushed the `birthday-gift` folder to the GitHub repo above.
2. There's a GitHub Actions workflow that deploys the site; once the workflow finishes the site will be available at:

```
https://renalynpino.github.io/Bday-Digital-Website-Gift/
```

Quick local test:

```powershell
# run from the project folder
python -m http.server 8000
# open http://localhost:8000
```

Make the repo public (if it's private) so other people can visit the link. If you want a different deploy option (Netlify or Vercel) or want me to monitor the Actions run, tell me and I'll do it.
