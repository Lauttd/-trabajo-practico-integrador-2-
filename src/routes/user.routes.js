import { Router } from "express";
import {
  getAllUserArticles,
  getByIdUserArticles,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRoutes = Router();

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import {
  deleteUserValidations,
  getUserByIdValidations,
  updateUserValidations,
} from "../middlewares/validations/user.validations.js";
import { applyValidations } from "../middlewares/validator.js";

// Solo un admin puede traer todos los usuarios
userRoutes.get("/users", authMiddleware, adminMiddleware, getAllUserArticles);

// Solo un admin puede tarer un usuario por ID
userRoutes.get(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  getUserByIdValidations,
  applyValidations,
  getByIdUserArticles
);

// Solo un admin puede borrar un usuario
userRoutes.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserValidations,
  applyValidations,
  deleteUser
);

// Solo un admin puede actualizar un usuario
userRoutes.put(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  updateUserValidations,
  applyValidations,
  updateUser
);
