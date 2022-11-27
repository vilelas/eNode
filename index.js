const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

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

app.listen(5000, () => {
  console.log("O servidor está rodando!");
});
