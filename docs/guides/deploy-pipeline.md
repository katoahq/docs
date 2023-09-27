---
title: Deploy a pipeline
---

## 1. Create a Katoa account

Sign up at [katoa.build/dashboard](https://katoa.build/dashboard)

## 2. Link a repository

Choose a GitHub repository associated with your selected org. When you add a repository, Katoa will run any pipelines in that repo on events you define (like commit, PRs etc)

<img src="/images/link-repository.png" />

## 3. Push your pipeline to GitHub

Go to your local respository where you have a Katoa pipeline (e.g. `.katoa/my-pipeline.ts`) and push it to GitHub

```bash
git add .
git commit -m "feat:added katoa pipeline"
git push origin main
```

## 4. View your pipeline logs

Now on every GitHub PR go to [katoa.build/dashboard](https://katoa.build/dashboard) and watch your pipeline logs live!

## 5. That's it!

Congratulations, you have successfully set up your pipelines to run on every commit / PR. This works for your team too!
