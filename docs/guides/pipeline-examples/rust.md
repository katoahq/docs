---
title: Rust Example
---

The pipeline runs two jobs, one for linting and one for building the project.

The pipeline also utilizes cache directories to speed up subsequent builds.

```typescript
import {
  CacheDirectories,
  Job,
  Pipeline,
} from "https://deno.land/x/cicada/mod.ts";

const cacheDirectories: CacheDirectories = [
  "target",
  "/usr/local/cargo/registry",
  "/usr/local/cargo/git",
];

const lintJob = new Job({
  name: "Build",
  image: "rust:latest",
  steps: [
    {
      run: "cargo fmt --check",
      cacheDirectories,
    },
    {
      run: "cargo clippy",
      cacheDirectories,
    },
  ],
});

const buildJob = new Job({
  name: "Build",
  image: "rust:latest",
  steps: [
    {
      run: "cargo build",
      cacheDirectories,
    },
  ],
});

export default new Pipeline([lintJob, buildJob]);
```
