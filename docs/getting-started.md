---
title: Quickstart
---

Katoa is a CI/CD platform. Use our TypeScript SDK to write pipelines, test them locally, then run them on every PR in our ultra-fast cloud

Here's how to build, test, and deploy your own Katoa pipeline in under < 2 minutes.

## 1. Download the `katoa` CLI

::: code-group

```bash [npm]
npm install -g @katoahq/katoa 
```

```bash [yarn]
yarn global add @katoahq/katoa 
```

```bash [pnpm]
pnpm install -g @katoahq/katoa 
```

```bash [brew]
brew install katoa
```

```bash [curl]
curl -fSsL https://katoa.build/install | sh
```

<em>Note: Katoa requires [Docker](https://docs.docker.com/engine/install/) & [deno](https://deno.land/manual@v1.32.3/getting_started/installation)</em>


:::

## 2. Create a new pipeline

Navigate to a project and run

```bash
katoa init
```

This will create help you the default piplines at `.katoa/<pipeline-name>.ts` that looks like [this](/guides/pipeline-examples/starter)

## 3. Test your pipeline locally

Test changes to your pipelines locally using the `katoa` CLI

```bash
katoa run <pipeline-name>
```

## 4. Create a Katoa Account

Sign up at [katoa.build/dashboard](https://katoa.build/dashboard)

## 5. Link your repository

Link your repository from step #2. Katoa will now run your pipelines on every commit / PR to your linked repos.

<img src="/images/link-repository.png" />

## 6. Push your pipeline to GitHub

```bash
git add .
git commit -m "feat:added katoa pipeline"
git push origin main
```

## 7. View your pipeline logs

Now go to [katoa.build/dashboard](https://katoa.build/dashboard) and watch your pipeline logs live!

## 8. That's it!

Check out our [guides](/guides) or [faq](/other/faq) to learn more
