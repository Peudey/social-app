import express from "express";
import { getPost, getPosts, publishPost } from "../controllers/posts.js"

const router = express.Router();

router.get("/:sort/:page", getPosts);
router.get("/:id", getPost);
router.post("/submit", publishPost);

export default router;
