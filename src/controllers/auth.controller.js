import { comparePassword, hashPassword } from "../helpers/bcypt/bcypt.js";
import { generateToken } from "../helpers/jwt/jwt.js";
import { UserModel } from "../models/user.model.js";

export const createRegister = async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    firstName,
    lastName,
    biography,
    avatarUrl,
    birthDate,
  } = req.body;
  try {
    const hashedPassword = await hashPassword(password);

    const crearUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role,
      profile: {
        firstName,
        lastName,
        biography,
        avatarUrl,
        birthDate,
      },
    });

    return res.status(201).json({ msg: "Se ha creado el usuario", crearUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const logueado = await UserModel.findOne({
      username: username,
    });

    if (!logueado) {
      return res.status(400).json({ msg: "No se encuentra nombre de usuario" });
    }

    if (!(await comparePassword(password, logueado.password))) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }

    //Crear token
    const token = generateToken({
      user_id: logueado._id,
      role: logueado.role,
    });

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    });

    const userLogueado = {
      id: logueado._id,
      username: logueado.username,
      email: logueado.email,
    };

    return res
      .status(200)
      .json({ msg: "Se ha logueado correctamente", data: userLogueado });
  } catch (error) {}
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ msg: "Logout exitoso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

//Obteniendo el perfil autenticado.
export const getProfile = async (req, res) => {
  const { user_id } = req.userdata;
  try {
    const obtenerProfile = await UserModel.findById(user_id, { profile: true });

    return res.status(200).json({ msg: "se obtuvo el perfil autenticado" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};

export const updateProfile = async (req, res) => {
  const { user_id } = req.userdata;
  const { firstName, lastName, biography, avatarUrl, birthDate } = req.body;
  try {
    const actualizarProfile = await UserModel.findByIdAndUpdate(
      user_id,
      {
        $set: {
          "profile.firstName": firstName,
          "profile.lastName": lastName,
          "profile.biography": biography,
          "profile.avatarUrl": avatarUrl,
          "profile.birthDate": birthDate,
        },
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ msg: "Perfil actualizado", data: actualizarProfile });
  } catch (error) {
    return res.status(500).json({ msg: "Error por parte del servidor" });
  }
};
