import { Schema, model } from "mongoose";


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
  }
);

export const ArticleModel = model("article", ArticleSchema);
