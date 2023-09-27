# Edit a pipeline

### What are the core building blocks of pipelines?

- A **pipeline** is a file in your `.katoa/` folder.
- A **job** is a container that executes code.
- A **step** is script (bash or deno) that runs in a job's container

### What does a pipeline look like?

```typescript my-pipeline.ts
import { Pipeline, Job } from "https://deno.land/x/katoa/mod.ts";

const job = new Job({
  name: "My First Job",
  image: "ubuntu:22.04",
  steps: [
    {
      name: "Run bash",
      run: "echo Hello from bash!",
    },
    {
      name: "Run deno/typescript",
      run: () => {
        console.log("Hello from deno typescript");
        console.log("I can read the local file system");
        console.log(Deno.readDirSync("~"));
        console.log("Or I can see environment variables");
        console.log("The container's username is " + Deno.env.get("USER"));
      },
    },
  ],
});

export default new Pipeline([job]);
```

## What should my pipeline do?

Teams create pipelines for the following reasons:

- build code (e.g. with tools like `turbo`, `make`, or `bazel`)
- test code (e.g. with tools like `cypress` or `jest`)
- deploy infrastructure (e.g. with tools like `aws` or `terraform`)
- release code (e.g. to `npm` or `cargo` package registry)
- release artifacts (e.g. to `artifactory` or `github`)
- interact with software tools (e.g. close PRs in `github` or send a message in `slack`)

## How do I edit my pipeline?

Katoa's SDK lets you do all of the above and more - it's incredibly flexible.

Learn more by reading our [SDK docs](/reference/sdk), playing with [pipeline examples](/pipeline-examples/starter), or setting up [autocomplete/intellisense](/guides/autocomplete)

