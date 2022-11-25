const mongoose = require("mongoose");

const esquemaUsuario = new mongoose.Schema(
  {
    nome: { Type: String, required: true, unique: true },
    email: { Type: String, required: true, unique: true },
    senha: { Type: String, required: true },
    admin: { Type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Usuario", esquemaUsuario);
