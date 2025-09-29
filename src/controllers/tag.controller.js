import { TagModel } from "../models/tag.model.js";

export const createTag = async (req, res) => {
  const { name, description } = req.body;
  try {
    const tag = await TagModel.create({ name, description });

    if (!tag) {
      return res.status({ msg: "Tag no encontrada" });
    }

    res
      .status(201)
      .json({ ok: true, msg: "Se ha creado exitosamente el tag", data: tag });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error por parte del servidor", error });
  }
};

export const getAllTag = async (req, res) => {
  try {
    const tag = await TagModel.find();

    if (!tag) {
      return res.status(404).json({ msg: "Tag no encontrada" });
    }

    res
      .status(200)
      .json({ ok: true, msg: "Se obtuvieron todas las tag", data: tag });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error por parte del servidor", error });
  }
};

export const getByIdTag = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await TagModel.findById(id);

    if (!tag) {
      return res.status(404).json({ msg: "Tag no encontrada" });
    }

    res
      .status(200)
      .json({ ok: true, msg: "Se obtuvieron por id el tag", data: tag });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error por parte del servidor", error });
  }
};

export const updateTag = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const tagUpdate = await TagModel.findByIdAndUpdate(id, {
      $set: data,
      new: true,
    });

    if (!tagUpdate) {
        return res.status(404).json({msg: "No se ha encontrado el tag"});
    }

    res.status(200).json({ok: true, msg: "Se ha actualizado correctamente el tag", data: tagUpdate})
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error por parte del servidor", error });
  }
};

export const deleteTag = async (req, res) => {
    const {id} = req.params;
    try {
        const tagDelete = await TagModel.findByIdAndDelete(id, {new: true});

        if (!tagDelete) {
            return res.status(404).json({msg: "No se ha encontrado el tag"});
        }

        res.status(200).json({ok: true, msg: "Se ha eliminado correcstamente el tag", data: tagDelete});
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "Error por parte del servidor", error });
  }
};
