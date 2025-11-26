import express from "express";
import { connectDB } from "./src/config/database.js";
import { commentRouter } from "./src/routes/comment.routes.js";
import { userRouter } from "./src/routes/user.routes.js";
import { tagRouter } from "./src/routes/tag.routes.js";
import { articleRouter } from "./src/routes/article.routes.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { articleTagRouter } from "./src/routes/articleTag.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT; 

app.use(express.json());

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", tagRouter);
app.use("/api", commentRouter);
app.use("/api", articleRouter);
app.use("/api", articleTagRouter);

app.listen(PORT, async () =>{
    await connectDB();
    console.log(`corriendo en el puerto ${PORT}`);
})

