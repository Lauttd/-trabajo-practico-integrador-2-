import { Schema, model } from "mongoose";

export const CommentSchema = new Schema(
    {
        content: {
            type: String,
            required: [true, "El contenido es requerido"],
            minLenght: 5,
            maxLenght: 500,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "Author",
        },
        article: {
            type: Schema.Types.ObjectId,
            ref: "Article",
        },
    },
    {
        timestamps: true,
    },
);

export const CommentModel = model("comment", CommentSchema);