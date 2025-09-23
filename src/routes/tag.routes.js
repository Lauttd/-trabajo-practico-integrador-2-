import { Router } from "express";
import { createTag, getAllTag, getByIdTag, updateTag, deleteTag } from "../controllers/tag.controller.js";

export const tagRoutes = Router();

tagRoutes.post("/tag", createTag);
tagRoutes.get("/tag", getAllTag);
tagRoutes.get("/tag", getByIdTag);
tagRoutes.put("/tag", updateTag);
tagRoutes.delete("/tag", deleteTag);