import express from "express";
import { addVote, removeVote } from "../controllers/votes.js";

const router = express.Router();

router.post("/add", addVote);
router.delete("/remove", removeVote);

export default router;
