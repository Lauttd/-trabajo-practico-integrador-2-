import { Schema, model } from "mongoose";

export const TagSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            minLenght: 2,
            maxLenght: 30,
        },
        description: {
            type: String, 
            maxLenght: 200,
        },
    },
    {
    timeStamp: true,
    },
);

export const TagModel = model("tag", TagSchema);