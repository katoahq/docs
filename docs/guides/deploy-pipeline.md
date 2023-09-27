---
title: Deploy a pipeline
---

## 1. Create a Cicada account

Sign up at [cicada.build/dashboard](https://cicada.build/dashboard)

## 2. Link a repository

Choose a GitHub repository associated with your selected org. When you add a repository, Cicada will run any pipelines in that repo on events you define (like commit, PRs etc)

<img src="/images/link-repository.png" />

## 3. Push your pipeline to GitHub

Go to your local respository where you have a Cicada pipeline (e.g. `.cicada/my-pipeline.ts`) and push it to GitHub

```bash
git add .
git commit -m "feat:added cicada pipeline"
git push origin main
```

## 4. View your pipeline logs

Now on every GitHub PR go to [cicada.build/dashboard](https://cicada.build/dashboard) and watch your pipeline logs live!

## 5. That's it!

Congratulations, you have successfully set up your pipelines to run on every commit / PR. This works for your team too!
