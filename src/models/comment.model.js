import { Schema, model } from "mongoose";

export const CommentSchema = new Schema(
    {
        content: {
            type: String,
            minLenght: 5,
            maxLenght: 500,
        },
        author: {
            type: Schema.Types.ObjectId,
        },
        article: {
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    },
);

export const CommentModel = model("comment", CommentSchema);