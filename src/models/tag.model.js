import { timeStamp } from "console";
import { Schema } from "mongoose";

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

export const TagModel = mongoose.model("tag", TagSchema);