import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minLenght: 3,
    maxLenght: 20,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  profile: {
    firstName: {
      type: String,
      minLenght: 2,
      maxLenght: 50,
    },
    lasName: {
      type: String,
      minLenght: 2,
      maxLenght: 50,
    },
    biography: {
      type: String,
      maxLenght: 500,
    },
    avatarUrl: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
  },
});

//Aca usamos el virtual
UserSchema.virtual("Articles", {
  ref: "article",
  localField: "_id",
  foreignField: "author",
});

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

export const UserModel = model("user", UserSchema);
