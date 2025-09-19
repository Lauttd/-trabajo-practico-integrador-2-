import { Router } from "express";
import { createTag, getAllTag, getByIdTag, updateTag, deleteTag } from "../controllers/tag.controller.js";

export const tagRoutes = Router();

tagRouter.post("/tag", createTag);
tagRouter.get("/tag", getAllTag);
tagRouter.get("/tag", getByIdTag);
tagRouter.put("/tag", updateTag);
tagRouter.delete("/tag", deleteTag);