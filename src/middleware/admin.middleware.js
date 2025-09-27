export const adminMiddleware = async (req, res, next) => {
  const { role } = req.userdata;
  if (!role === "admin") {
    return res.status(403).json({ msg: "Acceso denegado: solo admins." });
  }
  next();
};
