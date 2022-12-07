const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usuariosRoute = require("./routes/usuario")
const produtosRoute = require("./routes/produto");
const carrinhosRoute = require("./routes/carrinho");
const pedidosRoute = require("./routes/pedido");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Conectado ao banco de dados!");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

// Rotas 
app.use("/api/auth", authRoute);
app.use("/api/usuarios", usuariosRoute);
app.use("/api/produtos", produtosRoute);
app.use("/api/carrinhos", carrinhosRoute);
app.use("/api/pedidos", pedidosRoute);

app.listen(5000, () => {
  console.log("O servidor está rodando!");
});
