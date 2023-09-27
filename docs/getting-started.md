---
title: Getting Started
---

Katoa is a CI/CD platform. Use our TypeScript SDK to write pipelines, test them locally, then run them on every PR.

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

**Note:** Katoa requires [Docker](https://docs.docker.com/engine/install/) & [deno](https://deno.land/manual@v1.32.3/getting_started/installation)


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

## 4. That's it!

Check out our [guides](/guides) or [faq](/other/faq) to learn more
