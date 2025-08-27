import express from "express";
import { getContributors, getForks } from "../controllers/ContriControllers.js";

const router = express.Router();

router.get("/", getContributors);

export default router;
