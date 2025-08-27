import express from "express";
import { getStars } from "../controllers/starsController.js";

const router = express.Router();

router.get("/", getStars);

export default router;
