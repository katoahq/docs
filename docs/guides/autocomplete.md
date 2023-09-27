---
title: Set up autocomplete/intellisense
---

Set up autocomplete/intellisense for the Cicada TypeScript SDK

### 1. Install the Deno extension for VSCode:

Install the [Deno VSCode extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) from the VSCode marketplace.
Either click the link above or run the following command in your terminal:

```bash
code --install-extension denoland.vscode-deno
```

### 2. Add the following to your project's `.vscode/settings.json`

```json
{
  "deno.enablePaths": [".cicada"]
}
```

This will enable the Deno extension for the `.cicada` directory.

### 3. Make sure Deno is installed
If running `which deno` shows Deno is not installed, download it from https://deno.com/manual@v1.32.5/getting_started/installation

### 4. Restart VSCode

You will have to restart VSCode in order for the settings to take effect