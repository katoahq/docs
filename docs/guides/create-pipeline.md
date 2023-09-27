---
title: Create a pipeline
description: Set up a pipeline in your project
---

## 1. Make sure you have the `katoa` CLI installed

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

<em>Note: Katoa requires [Docker](https://docs.docker.com/engine/install/) & [deno](https://deno.land/manual@v1.32.3/getting_started/installation)</em>


:::

## 2. Navigate to a local project
```bash
cd path/to/my/project
```

## 3. Run `katoa init`

```bash
katoa init
```
This will create a simple example pipeline at `.katoa/my-pipeline.ts` that looks like [this](/guides/pipeline-examples/starter)
