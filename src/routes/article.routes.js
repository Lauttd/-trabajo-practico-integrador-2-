import { Router } from "express";
import { createArticle, getAllArticle, getByIdArticle, updateArticle, deleteArticle } from "../controllers/article.controller.js";

export const articleRutes = Router();

articleRutes.post("/article", createArticle);
articleRutes.get("/article", getAllArticle);
articleRutes.get("/article", getByIdArticle);
articleRutes.put("/article", updateArticle);
articleRutes.delete("/article", deleteArticle);