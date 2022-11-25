const mongoose = require("mongoose");

const esquemaProduto = new mongoose.Schema(
  {
    titulo: { Type: String, required: true, unique: true },
    descricao: { Type: String, required: true },
    imagem: { Type: String, required: true },
    categoria: { Type: Array },
    tamanho: { Type: String, required: true },
    cor: { Type: String, required: true },
    valor: { Type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Produto", esquemaProduto);
