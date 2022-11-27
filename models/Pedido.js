const mongoose = require("mongoose");

const esquemaPedido = new mongoose.Schema(
  {
    usuarioId: { type: String, required: true },
    produtos: [
      {
        produtoId: { type: String },
        quantidade: { type: Number, default: 1 },
      },
    ],
    valorTotal: { type: Number, required: true },
    enderecoUsuario: { type: Object, required: true },
    status: { type: String, default: "pendente" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pedido", esquemaPedido);
