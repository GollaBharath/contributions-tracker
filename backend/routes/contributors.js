import express from "express";
import { getContributors } from "../controllers/ContriControllers.js";

const router = express.Router();

router.get("/", getContributors);

export default router;
