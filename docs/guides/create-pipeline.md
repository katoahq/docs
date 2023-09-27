---
title: Create a pipeline
description: Set up a pipeline in your project
---

## 1. Make sure you have the `cicada` CLI installed

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

## 2. Navigate to a local project
```bash
cd path/to/my/project
```

## 3. Run `cicada init`

```bash
cicada init
```
This will create a simple example pipeline at `.cicada/my-pipeline.ts` that looks like [this](/guides/pipeline-examples/starter)
