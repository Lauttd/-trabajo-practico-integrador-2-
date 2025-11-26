import { Router } from "express";
import { createCommentValidations } from "../middlewares/validator/comment.validations.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { createComment, deleteComment, getAllComment, getCommentsLog, updateComment } from "../controllers/comment.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { updateCommentValidations } from "../middlewares/validator/comment.validations.js";
import {ownerOrAdminMiddleware} from "../middlewares/ownerOrAdmin.middleware.js"
import { paramArticleIdValidator, paramValidator } from "../middlewares/param.validations.js";

export const commentRouter = Router()

commentRouter.use(authMiddleware)

commentRouter.post("/comments", createCommentValidations, applyValidations, createComment)
commentRouter.get("/comments/article/:articleId", paramArticleIdValidator, applyValidations, getAllComment)
commentRouter.get("/comments/my", getCommentsLog)
commentRouter.put("/comments/:id", paramValidator,updateCommentValidations, applyValidations, ownerOrAdminMiddleware, updateComment)
commentRouter.delete("/comments/:id", paramValidator, applyValidations, ownerOrAdminMiddleware, deleteComment)