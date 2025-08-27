import express from "express";
import { getForks } from "../controllers/forksController.js";

const router = express.Router();

router.get("/", getForks);

export default router;
