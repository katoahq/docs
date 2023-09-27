---
title: Step secrets
---

The Secret class is used to create a new secret, which can be used in jobs and steps within the pipeline. Secrets are only accessible to the steps you expose them to.

## Creating and using secrets

To create a new secret, you need to import the Secret class from the Katoa library:

```typescript
import { Secret } from "https://deno.land/x/katoa/mod.ts";
```

Then, create a new instance of the Secret class, passing the secret name as an argument. The secret name should match the one stored in your secrets storage or environment variables:

```typescript
const secret = new Secret("GITHUB_TOKEN");
```

To use the secret in a job, you need to include it in the secrets array of a step. This will make the secret available to the step's execution context:

```typescript
{
    name: "Create release",
    run: async () => {
        // ...
    },
    secrets: [secret],
}
```

To access the value of a secret within a step, you need to call the `value()` method on the secret object. This method returns a promise that resolves to the secret value:

```typescript
const secretValue = await secret.value();
```

## CLI

The `katoa run` command takes several arguments that can be used to manage secrets in your pipeline.

### `-s, --secret <SECRET>`

Specify the name of the secret to use in the pipeline. The value of the secret is retrieved from the environment variables. If a .env file is present, the CLI will also load secrets from it.

Example:

```bash
katoa run --secret GITHUB_TOKEN
```

### `--no-dotenv`

Disable loading secrets from a .env file. Use this flag if you want to ensure that no secrets are loaded from .env files.

Example:

```bash
katoa run --no-dotenv
```

### `--dotenv <DOTENV>`

Specify a custom .env file to load secrets from. This will override the default .env file lookup.

Example:

```bash
katoa run --dotenv custom-env-file.env
```

### `--secrets-json <SECRETS_JSON>`

Load secrets from a JSON file. The JSON file should contain key-value pairs representing the secrets.

Example JSON file format:

```json
{ "KEY": "VALUE", "KEY2": "VALUE2" }
```

To use this flag, provide the path to the JSON file containing the secrets:

```bash
katoa run --secrets-json secrets.json
```

By using these CLI flags, you can easily manage and load secrets from various sources, making it more convenient and secure to work with sensitive information in your CI/CD pipeline.
