import { Router } from "express";

import {
  createRegister,
  getProfile,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { get } from "mongoose";

export const authRoutes = Router();

authRoutes.post("/register", createRegister);
authRoutes.get("/profile/:id", getProfile);
authRoutes.post("/login/:id", login);
authRoutes.post("/logout", logout);
authRoutes.put("/profile/:id", updateProfile);
