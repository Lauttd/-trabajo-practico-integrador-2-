import { Router } from "express";
import {
  getAllUserArticles,
  getByIdUserArticles,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.get("/user", getAllUserArticles);
userRoutes.get("/user", getByIdUserArticles);
userRoutes.put("/user", updateUser);
userRoutes.delete("/user", deleteUser);
