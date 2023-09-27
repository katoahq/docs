---
title: Quickstart
---

Cicada is a CI/CD platform. Use our TypeScript SDK to write pipelines, test them locally, then run them on every PR in our ultra-fast cloud

Here's how to build, test, and deploy your own Cicada pipeline in under < 2 minutes.

## 1. Download the `cicada` CLI

::: code-group

```bash [npm]
npm install -g @cicadahq/cicada 
```

```bash [yarn]
yarn global add @cicadahq/cicada 
```

```bash [pnpm]
pnpm install -g @cicadahq/cicada 
```

```bash [brew]
brew install cicada
```

```bash [curl]
curl -fSsL https://cicada.build/install | sh
```

<em>Note: Cicada requires [Docker](https://docs.docker.com/engine/install/) & [deno](https://deno.land/manual@v1.32.3/getting_started/installation)</em>


:::

## 2. Create a new pipeline

Navigate to a project and run

```bash
cicada init
```

This will create help you the default piplines at `.cicada/<pipeline-name>.ts` that looks like [this](/guides/pipeline-examples/starter)

## 3. Test your pipeline locally

Test changes to your pipelines locally using the `cicada` CLI

```bash
cicada run <pipeline-name>
```

## 4. Create a Cicada Account

Sign up at [cicada.build/dashboard](https://cicada.build/dashboard)

## 5. Link your repository

Link your repository from step #2. Cicada will now run your pipelines on every commit / PR to your linked repos.

<img src="/images/link-repository.png" />

## 6. Push your pipeline to GitHub

```bash
git add .
git commit -m "feat:added cicada pipeline"
git push origin main
```

## 7. View your pipeline logs

Now go to [cicada.build/dashboard](https://cicada.build/dashboard) and watch your pipeline logs live!

## 8. That's it!

Check out our [guides](/guides) or [faq](/other/faq) to learn more
