import express from "express";
import { getPost, getPosts } from "../controllers/posts.js"

const router = express.Router();

router.get("/page/:page", getPosts);
router.get("/:id", getPost);

export default router;
