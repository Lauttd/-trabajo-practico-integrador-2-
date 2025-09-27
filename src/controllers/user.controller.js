import { matchedData } from "express-validator";
import { UserModel } from "../models/user.model.js";
import { selectFields } from "express-validator/lib/field-selection.js";

<<<<<<< HEAD
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
=======
//Aca obtenemos todos los usuarios con sus articulos.
export const getAllUser = async (req, res) => {
  try {
    const users = UserModel.find().populate({
      path: "articles",
      select: "title status",
    });

    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" }, error);
  }
};

export const getByIdUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).populate({
      path: "articles",
      select: "title content",
      populate: {
        path: "comments",
        select: "content author",
      },
    });
>>>>>>> 1ce65ab651311a69a6124884cd1c1c92531d7149

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

//Actualizar usuario.
export const updateUser = async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    res.status(200).json({ data: updateUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

//Eliminamos usuario => eliminacion fisica del usuario.
export const deleteUser = async (req, res) => {
  try {
    const deleteUsuario = await UserModel.findByIdUpdate(req.params.id, {
      deleteAt: Date.now(),
    });
    if (!deleteUsuario) {
      return res.status(404).json({ msg: "No se encontro el usuario" });
    }

    res.status(200).json({ msg: "Se elimino el usuario correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
>>>>>>> 1ce65ab651311a69a6124884cd1c1c92531d7149
};
