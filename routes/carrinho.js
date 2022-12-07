const {
  verificarToken,
  verificarTokenEAutorizar,
  verificarTokenAdmin,
} = require("./verificarToken");

const Carrinho = require("../models/Carrinho");
const router = require("express").Router();

// Cadastrar novo pedido

router.post("/", verificarToken, async (req, res) => {
  const novoCarrinho = new Carrinho(req.body);

  try {
    await novoCarrinho.save();
    res.status(500).json({ mensagem: "Carrinho cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Atualizar carrinho

router.put("/:id", verificarTokenEAutorizar, async (req, res) => {
  try {
    const atualizacaoCarrinho = await Carrinho.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ mensagem: "Dados atualizados com sucesso" });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// Excluir

router.delete("/:id", verificarTokenEAutorizar, async (req, res) => {
  try {
    await Carrinho.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: "Carrinho excluído com sucesso" });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// Buscar produto no carrinho

router.get("/buscar/:usuarioId", verificarTokenEAutorizar, async (req, res) => {
  try {
    const carrinho = await Carrinho.findOne({ userId: req.params.usuarioId });
    res.status(200).json({ carrinho });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// // Listar todos os produtos

router.get("/", verificarTokenAdmin, async (req, res) => {
  try {
    const carrinhos = await Carrinho.find();
    res.status(200).json(carrinhos);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
