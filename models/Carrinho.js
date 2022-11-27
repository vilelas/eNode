const mongoose = require("mongoose");

const esquemaCarrinho = new mongoose.Schema(
  {
    usuarioId: { type: String, required: true },
    produtos: [
      {
        produtoId: { type: String },
        quantidade: { type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Carrinho", esquemaCarrinho);
