import { matchedData } from "express-validator";
import { UserModel } from "../models/user.model.js";

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
      return res
        .status(404)
        .json({ msg: "No se encontaron los usuarios en la base de datos" });
    }

    res.status(200).json({ ok: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const updateUser = async (req, res) => {
  // Obtiene solo datos de la ubicación especificada (params).
  const { id } = matchedData(req, { locations: ["params"] });
  // Obtiene todos los datos validados de la request.
  const validateData = matchedData(req);

  try {
    const userUpdate = await UserModel.findByIdAndUpdate(id, validateData, {
      new: true, // Devuelve el documento actualizado
      runValidators: true, // Ejecuta las validaciones del schema
    });

    if (!userUpdate) {
      return res.status(404).json({msg: "Usuario no encontrado"});
    }

    res.status(200).json({ok: true, msg: "Usuario actualizado correctamente", data: userUpdate});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  const {id} = matchedData(req, {locations: [params] });

  try {
    const userDelete = await UserModel.findByIdAndDelete(id);

    if (!userDelete) {
      return res.status(404).json({msg: "Usuario no encontrado"});
    }

    res.status(200).json({ msg: true, msg: "Usuario eliminado correctamente", data: UserModel});
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  } catch (error) {}
};
