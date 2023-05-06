import express from "express";
import cors from 'cors';
import postRouter from "./routes/posts.js";
import voteRouter from "./routes/votes.js";
import authRouter from "./routes/auth.js";
import commentRouter from "./routes/comments.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/post",postRouter);
app.use("/vote", voteRouter);
app.use("/user", authRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
