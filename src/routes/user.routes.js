import { Router } from "express";
import {
  getAllUser,
  getByIdUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.get("/user", getAllUser);
userRoutes.get("/user", getByIdUser);
userRoutes.put("/user", updateUser);
userRoutes.delete("/user", deleteUser);
