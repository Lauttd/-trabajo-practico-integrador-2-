import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { deleteUser, getAllUserArticles, getByIdUserArticles, updateUser } from "../controllers/user.controller.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { updateUserValidations } from "../middlewares/validator/updateUser.validations.js";
import { paramValidator } from "../middlewares/param.validations.js";

export const userRouter = Router()

userRouter.use(authMiddleware)

userRouter.get("/users", adminMiddleware, getAllUserArticles)
userRouter.get("/users/:id", paramValidator, applyValidations, adminMiddleware, getByIdUserArticles)
userRouter.put("/users/:id", paramValidator, updateUserValidations, adminMiddleware, applyValidations, updateUser)
userRouter.delete("/users/:id", paramValidator, applyValidations, adminMiddleware, deleteUser)