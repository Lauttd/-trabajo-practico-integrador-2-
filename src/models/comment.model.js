import { Schema, model } from "mongoose";

export const CommentSchema = new Schema(
<<<<<<< HEAD
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
            ref: "Article"
        },
=======
  {
    content: {
      type: String,
      minLenght: 5,
      maxLenght: 500,
>>>>>>> 1ce65ab651311a69a6124884cd1c1c92531d7149
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
  }
);

export const CommentModel = model("comment", CommentSchema);
