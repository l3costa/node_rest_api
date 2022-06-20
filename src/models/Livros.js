import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: mongoose.Types.ObjectId, ref: "autores", required: true },
        editora: { type: mongoose.Types.ObjectId, ref: "editoras", required: true },
        paginas: { type: Number }
    }
)

const livros = mongoose.model('livros', livroSchema)

export default livros