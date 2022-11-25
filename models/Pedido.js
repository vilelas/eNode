const mongoose = require("mongoose");

const esquemaPedido = new mongoose.Schema(
  {
    usuarioId: { Type: String, required: true },
    produtos: [
      {
        produtoId: { Type: String },
        quantidade: { Type: Number, default: 1 },
      },
    ],
    valorTotal: { Type: Number, required: true },
    enderecoUsuario: { Type: Object, required: true },
    status: { Type: String, default: "pendente" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pedido", esquemaPedido);
