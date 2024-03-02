# gh-device-flow-cli

Little CLI for authorizing a GitHub App, generating a user-to-server token using the Device Flow.

## Usage

```
❯ bunx gh-device-flow-cli <client_id>

Open https://github.com/login/device
Enter code: 2B63-D12F
```

(You can also use `npx`)

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.mjs
```

This project was created using `bun init` in bun v1.0.22. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
