# What are pipelines, jobs & steps

- **Pipeline**: Pipelines are TypeScript files like `build.ts`, `deploy.ts`, or `run_tests.ts`. They are checked into your repository and run when triggered by an event in your repository, or when triggered manually, or at a defined schedule. A pipeline takes one parameter: an array of jobs.
- **Jobs**: A job is a lightweight container that executes code. It takes one parameter: an array of steps.
- **Steps**: A step is either a shell script or Deno/TypeScript script that executes in its parent job's container

<img src="/docs/images/pipelines-jobs-steps.png" />
