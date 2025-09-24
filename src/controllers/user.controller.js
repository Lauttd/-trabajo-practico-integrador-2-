import { UserModel } from "../models/user.model.js";

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
};
