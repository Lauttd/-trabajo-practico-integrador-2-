import { Router } from "express";
import { createUser, getAllUser, getByIdUser, updateUser, deleteUser } from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.post("/user", createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user", getByIdUser);
userRoutes.put("/user", updateUser);
userRoutes.delete("/user", deleteUser);