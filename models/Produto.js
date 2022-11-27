const mongoose = require("mongoose");

const esquemaProduto = new mongoose.Schema(
  {
    titulo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    categoria: { type: Array },
    tamanho: { type: String, required: true },
    cor: { type: String, required: true },
    valor: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Produto", esquemaProduto);
