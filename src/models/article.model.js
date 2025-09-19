import { Schema } from "mongoose";
import { type } from "os";

export const ArticleSchema = new Schema(
    {
        title: {
            type: String,
            minLenght: 3,
            maxLenght: 200,
        },
        content: {
            type: String,
            minLenght: 50,
        },
        excerpt: {
            type: String,
            maxLenght: 500,
        },
        status: {
            type: String,
            enum: ["published", "achived"],
            default: "published",
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        tags: {
            type: [Schema.Types.ObjectId],
            ref: "tag",
        },
    },
    {
        timestamps: true,
    },
);

export const ArticleModel = mongoose.model("article", ArticleSchema);