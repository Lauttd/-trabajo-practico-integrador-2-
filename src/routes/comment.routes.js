import { Router } from "express";
import { createComment, getAllComment, getByIdComment, updateComment, deleteComment } from "../controllers/comment.controller.js";

export const commentRoutes = Router();

commentRoutes.post("/comment", createComment);
commentRoutes.get("/comment", getAllComment);
commentRoutes.get("/comment", getByIdComment);
commentRoutes.put("/comment", updateComment);
commentRoutes.delete("/comment", deleteComment);