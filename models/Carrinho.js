const mongoose = require("mongoose");

const esquemaCarrinho = new mongoose.Schema(
  {
    usuarioId: { Type: String, required: true },
    produtos: [
      {
        produtoId: { Type: String },
        quantidade: { Type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Carrinho", esquemaCarrinho);
