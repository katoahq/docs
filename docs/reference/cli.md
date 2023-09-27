---
title: CLI
description: "Use the Katoa CLI to run pipelines locally"
---

```bash
Usage: katoa <COMMAND>

Commands:
  run <pipeline>    Run a katoa pipeline
  init              Initialize a katoa project
  new <pipeline>    Create a katoa pipeline in nearest .katoa/ directory
  update            Update katoa
  completions       Install shell completions

Options:
  -h, --help        Print help
  -V, --version     Print version
```

```bash
Usage: katoa run <pipeline> [OPTIONS]

  --no-cache
      Disable caching

  -s, --secret <SECRET>
      Name of the secret to use, these come from environment variables
      The CLI will also look for a .env file

  --no-dotenv
      Do not load .env file

  --dotenv <DOTENV>
      Load a custom .env file from a path
      This will override the default .env lookup

  --secrets-json <SECRETS_JSON>
      Load secrets from a json file
      They should look like this: `{ "KEY": "VALUE", "KEY2": "VALUE2" }`

  --oci-backend <OCI_BACKEND>
      The OCI backend to use. Possible values are "docker", "podman". Default is docker.
      You can also set KATOA_OCI_BACKEND env variable
```

