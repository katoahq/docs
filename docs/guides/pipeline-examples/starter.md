---
title: Starter Example
---

This is the default pipeline that's created when you run `katoa init`

It shows off the basic features of Katoa:

- Creating a job with a name and image
- Running a shell command
- Running a deno script that interacts with the local file system and environment variables
- Trigger the pipeline on push/pull request to main

```typescript
import { Job, Pipeline } from "https://deno.land/x/katoa/mod.ts";

const job = new Job({
  name: "My First Job",
  image: "ubuntu:22.04",
  steps: [
    {
      name: "Run bash",
      run: "echo hello from bash!",
    },
    {
      name: "Run deno/typescript",
      run: () => {
        console.log("Hello from deno typescript");
        console.log("I can read the local file system");
        console.log("e.g. here are all the directories in my project");
        console.log(Array.from(Deno.readDirSync("/app")).map((d) => d.name));
        console.log("Or I can see my environment variables");
        console.log(Deno.env.toObject());
      },
    },
  ],
});

export default new Pipeline([job], {
  on: {
    pullRequest: ["main"],
    push: ["main"],
  },
});
```
