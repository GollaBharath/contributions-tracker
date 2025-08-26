import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.Git_PAT });

const app = express();
const port = process.env.PORT || 3000;

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
