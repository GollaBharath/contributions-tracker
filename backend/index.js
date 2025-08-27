import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import forksRouter from "./routes/forks.js";
import contributorsRouter from "./routes/contributors.js";
import starsRouter from "./routes/stars.js";
import { Octokit } from "octokit";

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const port = process.env.PORT || 3000;

// Attach owner info to request for controller use
app.use(async (req, res, next) => {
  if (!req.owner) {
    try {
      const octokit = new Octokit({ auth: process.env.Git_PAT });
      const data = await octokit.rest.users.getAuthenticated();
      req.owner = data.data.login;
    } catch (err) {
      req.owner = undefined;
    }
  }
  next();
});

app.use("/api/forks", forksRouter);
app.use("/api/contributors", contributorsRouter);
app.use("/api/stars", starsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
