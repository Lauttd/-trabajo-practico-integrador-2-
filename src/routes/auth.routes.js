import { Router } from "express";
import { getProfile, login, logout, createRegister, updateProfile } from "../controllers/auth.controller.js";
import { userValidations } from "../middlewares/validator/user.validations.js";
import { applyValidations } from "../middlewares/validator/applyValidations.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginValidations } from "../middlewares/validator/login.validations.js";
import { updateProfileValidations } from "../middlewares/validator/updateProfile.validations.js";

export const authRouter = Router()

authRouter.post("/auth/register", userValidations, applyValidations, createRegister)
authRouter.post("/auth/login", loginValidations, applyValidations, login)
authRouter.post("/auth/logout", authMiddleware, logout)
authRouter.get("/auth/profile", authMiddleware, getProfile)
authRouter.put("/auth/profile", authMiddleware, updateProfileValidations, applyValidations, updateProfile)