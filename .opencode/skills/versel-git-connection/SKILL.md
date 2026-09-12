---
name: versel-git-connection
description: Deploy the website-sujal project to Vercel via the GitHub-connected pipeline. Use when the user types /deploy or asks to deploy, publish, push live, or redeploy the website.
---

# versel-git-connection

Deploy workflow for the **website-sujal** project (Next.js app in `medalyze-clone/`, live at https://website-sujal.vercel.app).

## Project facts

- Git repo root: the `website copy` directory (`.git` lives here, NOT in `medalyze-clone/`)
- Next.js app dir: `medalyze-clone/`
- GitHub repo: `aiinfluencermodel1-dot/website-sujal`, production branch: `main`
- Vercel project: `website-sujal`, root directory: `medalyze-clone`, scope: `aiinfluencermodel1-7526`
- GitHub → Vercel integration is connected, so pushing to `main` auto-deploys. No Vercel CLI deploy needed.

## Workflow

1. **Check status** — run `git status` and `git diff --stat` from the repo root. If there is nothing to commit and nothing to push, skip to step 4 (just verify the live deployment).
2. **Commit** — stage all intended changes (`git add -A`) and commit with a clear message. If the user supplied text after `/deploy`, use it as the commit message.
3. **Push** — `git push new-origin main` (the `website-sujal` remote). If that remote is missing, push to whichever remote points at `aiinfluencermodel1-dot/website-sujal.git`. This triggers the Vercel auto-deploy.
4. **Verify** — poll the Vercel API for the newest deployment on branch `main` until its state is `READY` (timeout ~5 min):
   - Needs a Vercel token in the `VERCEL_TOKEN` env var. If it is not set, ask the user to create one at https://vercel.com/account/tokens and provide it (they can revoke it afterwards).
   - `GET https://api.vercel.com/v6/deployments?projectId=website-sujal&meta-githubCommitRef=main` with `Authorization: Bearer $VERCEL_TOKEN`
   - Report the deployment URL and confirm https://website-sujal.vercel.app serves the update.
5. **Report** — reply with the commit hash, deployment state, and live URL. Keep it short.

## Rules

- Never hardcode any token in files or commit messages.
- Never force-push. Never commit secrets.
- If the Vercel build fails, fetch the build logs (`GET https://api.vercel.com/v2/deployments/{id}/events`) and summarize the error.
