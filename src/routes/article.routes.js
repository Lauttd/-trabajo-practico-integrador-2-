import { Router } from "express";
import { createArticle, deleteArticle, getAllArticle, getByIdArticle, updateArticle } from "../controllers/article.controller.js"
import { createArticleValidations } from "../middlewares/validator/article.validations.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { ownerOrAdminMiddleware } from "../middlewares/ownerOrAdmin.middleware.js";
import { updateArticleValidations } from "../middlewares/validator/article.validations.js";
import { paramValidator } from "../middlewares/param.validations.js";

export const articleRouter = Router()

articleRouter.use(authMiddleware)

articleRouter.post("/articles", createArticleValidations, applyValidations, createArticle)
articleRouter.get("/articles", getAllArticle)
articleRouter.get("/articles/:id",paramValidator, applyValidations, getByIdArticle)
articleRouter.put("/articles/:id",paramValidator, updateArticleValidations, applyValidations, ownerOrAdminMiddleware, updateArticle )
articleRouter.delete("/articles/:id", paramValidator, applyValidations, ownerOrAdminMiddleware, deleteArticle )