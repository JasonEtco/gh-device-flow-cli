#!/usr/bin/env node

import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";
import chalk from "chalk";

// USAGE:
// node index.mjs <client_id>

async function main() {
  const clientID = process.argv[2];
  if (!clientID) {
    throw new Error("client_id required");
  }
  if (!clientID.startsWith("Iv1.")) {
    throw new Error(`invalid client_id: ${clientID}`);
  }

  const auth = createOAuthDeviceAuth({
    clientType: "github-app",
    clientId: clientID,
    onVerification(verification) {
      console.log("Open URL:   %s", chalk.bold(verification.verification_uri));
      console.log("Enter code: %s", chalk.cyan(chalk.bold(verification.user_code)));
    },
  });
  
  const tokenAuthentication = await auth({
    type: "oauth",
  });

  console.log(tokenAuthentication)
}

main().catch(console.error);