---
title: Node Example
---

This is a simple example of a Node.js project using Cicada.

It has a single job that installs dependencies and runs the build script.

```typescript
import { Job, Pipeline } from "https://deno.land/x/cicada/mod.ts";

const build = new Job({
  name: "Node Build",
  image: "node",
  steps: [
    {
      name: "Install Dependencies",
      run: "npm install",
      cacheDirectories: ["node_modules"],
    },
    {
      name: "Run build",
      run: "npm run build",
      cacheDirectories: ["node_modules"],
    },
  ],
});

export default new Pipeline([build]);
```
