import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controlllers/commentController.js";
import {
  getPostComments,
  likeComment,
  editComment,
} from "../controlllers/commentController.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);

export default router;
