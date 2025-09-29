import { ArticleModel } from "../models/article.model.js";

// Agrega un tag a un article
export const addTagToArticle = async (req, res) => {
    const { articleId, tagId } = req.params;
    try {
        // Agregar tag a article
        const addTagArticle = await ArticleModel.findByIdAndUpdate(
            articleId,
            {
                $addToSet: { tags: tagId }, // $addtoset agrega elementos al array pero evita duplicados
            },
            { new: true } 
        );

        res.status(200).json({
            ok: true,
            message: "Tag agregado al article",
            data: addTagArticle,
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error interno del servidor",
            err,
        });
    }
}

// Elimina un tag de un article
export const removeTagFromArticle = async(req, res) => {
    const { articleId, tagId } = req.params;
    try {
        // Eliminar tag de article
        const deleteTagArticle = await ArticleModel.findByIdAndUpdate(
            articleId,
            {
                $pull: { tags: tagId }, // $pull elimina un elemento de un array
            },
            { new: true } 
        );
        
        res.status(200).json({
            ok: true,
            message: "Tag eliminado del article",
            data: deleteTagArticle,
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error interno del servidor",
            err,
        });
    }
} 