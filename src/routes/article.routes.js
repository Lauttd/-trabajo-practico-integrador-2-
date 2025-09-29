import { Router } from "express";
import { createArticle, getAllArticle, getByIdArticle, updateArticle, deleteArticle, getArticlesLog } from "../controllers/article.controller.js";
import { get } from "mongoose";

export const articleRutes = Router();

articleRutes.post("/article", createArticle);
articleRutes.get("/article", getAllArticle);
articleRutes.get("/article", getByIdArticle);
articleRutes.get("/article", getArticlesLog);
articleRutes.put("/article", updateArticle);
articleRutes.delete("/article", deleteArticle);
