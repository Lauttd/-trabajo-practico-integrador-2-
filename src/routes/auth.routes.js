import { Router } from "express";

import {
  createRegister,
  getProfile,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";


export const authRoutes = Router();

authRoutes.post("/auth/register", createRegister);
authRoutes.get("/auth/profile/:id", getProfile);
authRoutes.post("/auth/login", login);
authRoutes.post("/auth/logout", logout);
authRoutes.put("/auth/profile/:id", updateProfile);
