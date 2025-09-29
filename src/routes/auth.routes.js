import { Router } from "express";

import {
  createRegister,
  getProfile,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";


export const authRoutes = Router();

import { applyValidations } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  registerValidations,
  updateAuthProfileValidations,
} from "../middlewares/validations/auth.validations.js";

export const authRouter = Router();
authRouter.post(
  "/auth/register",
  registerValidations,
  applyValidations,
  createRegister
);
authRouter.post("/auth/login", login);
authRouter.post("/auth/logout", authMiddleware, logout);
authRouter.get("/auth/profile", authMiddleware, getProfile);
authRouter.put(
  "/auth/profile",
  authMiddleware,
  updateAuthProfileValidations,
  applyValidations,
  updateProfile
);
