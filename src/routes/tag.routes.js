import { Router } from "express";
import { createTag, deleteTag, getAllTag, getByIdTag, updateTag } from "../controllers/tag.controller.js";
import { createTagValidations } from "../middlewares/validator/tag.validations.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { updateTagValidations } from "../middlewares/validator/tag.validations.js";
import { paramValidator } from "../middlewares/param.validations.js";

export const tagRouter = Router()

tagRouter.use(authMiddleware)

tagRouter.post("/tags", adminMiddleware, createTagValidations, applyValidations, createTag)
tagRouter.get("/tags", getAllTag)
tagRouter.get("/tags/:id",paramValidator, applyValidations, getByIdTag)
tagRouter.put("/tags/:id", paramValidator, applyValidations, adminMiddleware, updateTagValidations, applyValidations, updateTag)
tagRouter.delete("/tags/:id", paramValidator, applyValidations, adminMiddleware, deleteTag)