import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { ownerOrAdminMiddleware } from "../middlewares/ownerOrAdmin.middleware.js";
import { addTagToArticle, removeTagFromArticle } from "../controllers/articleTag.controller.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { validateArticleTagParam } from "../middlewares/validator/articleTag.validations.js";

export const articleTagRouter = Router()

articleTagRouter.use(authMiddleware)

articleTagRouter.post("/articles/:articleId/tags/:tagId", validateArticleTagParam, applyValidations, ownerOrAdminMiddleware, addTagToArticle )
articleTagRouter.delete("/articles/:articleId/tags/:tagId",validateArticleTagParam, applyValidations, ownerOrAdminMiddleware, removeTagFromArticle )