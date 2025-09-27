import { matchedData } from "express-validator";
import { UserModel } from "../models/user.model.js";
import { selectFields } from "express-validator/lib/field-selection.js";

export const getAllUserArticles = async (req, res) => {
  try {
    const user = await UserModel.find(
      {},
      { username: 1, articles: 1 }
    ).populate("articles", "titles status");

    if (!user) {
      return res
        .status(404)
        .json({ msg: "No se encontraron los usuarios en la base de datos" });
    }

    res.status(200).json({ ok: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const getByIdUserArticles = async (req, res) => {
  const { id } = matchedData(req, { locations: ["params"] });

  try {
    const user = await UserModel.findById(id, {
      username: 1,
      articles: 1,
    }).populate({
      path: "articles",
      select: "title status",
      //para traer los comentarios
      populate: {
        path: "comments",
        select: "author content",
      },
    });

    if (!user) {
        return res.status(404).json({msg: "No se encontaron los usuarios en la base de datos"});
    }

    res.status(200).json({ok: true, data: user});

  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  } catch (error) {}
};
