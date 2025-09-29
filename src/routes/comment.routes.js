import { Router } from "express";
import { createComment, getAllComment, getCommentsLog, updateComment, deleteComment } from "../controllers/comment.controller.js";

export const commentRoutes = Router();

commentRoutes.post("/comment", createComment);
commentRoutes.get("/comment", getAllComment);
commentRoutes.get("/comment", getCommentsLog);
commentRoutes.put("/comment", updateComment);
commentRoutes.delete("/comment", deleteComment);