import express from "express";
import { getPostComments } from "../controllers/comments.js";

const router = express.Router();

router.get("/post/:id", getPostComments);

export default router;