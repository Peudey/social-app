import express from "express";
import { addVote } from "../controllers/votes.js";

const router = express.Router();

router.post("/add", addVote);

export default router;
