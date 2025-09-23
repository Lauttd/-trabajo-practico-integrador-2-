import express from "express";
import { connectDB } from "./src/config/database.js";
import { commentRoutes } from "./src/routes/comment.routes.js";
import { userRoutes } from "./src/routes/user.routes.js";
import { tagRoutes } from "./src/routes/tag.routes.js";
import { articleRutes } from "./src/routes/article.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT; 

app.use(express.json());

app.use("/", userRoutes);
app.use("/", tagRoutes);
app.use("/", commentRoutes);
app.use("/", articleRutes);

app.listen(PORT, async () =>{
    await connectDB();
    console.log(`corriendo en el puerto ${PORT}`);
})

