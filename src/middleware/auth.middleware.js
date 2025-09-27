import jwt from "jsonwebtoken";

// Verificar token JWT
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ msg: "Por favor provea un token valido" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userdata = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ msg: "Por favor provea un token valido", error });
  }
};
