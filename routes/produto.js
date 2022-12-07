const {
  verificarToken,
  verificarTokenEAutorizar,
  verificarTokenAdmin,
} = require("./verificarToken");

const Produto = require("../models/Produto");
const router = require("express").Router();

// Cadastrar novo produto

router.post("/", verificarTokenAdmin, async (req, res) => {
  const novoProduto = new Produto(req.body);

  try {
    await novoProduto.save();
    res.status(500).json({ mensagem: "Produto cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Atualizar dados do produto

router.put("/:id", verificarTokenAdmin, async (req, res) => {
  try {
    const atualizacaoProduto = await Produto.findByIdAndUpdate(
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

// Excluir produto

router.delete("/:id", verificarTokenAdmin, async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: "Produto excluído com sucesso" });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// Buscar produto

router.get("/buscar/:id", async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    res.status(200).json({ produto });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// Listar todos os produtos

router.get("/", async (req, res) => {
  const qNovo = req.query.new;
  const qCategoria = req.query.categoria;
  try {
    let produtos;

    if (qNovo) {
      produtos = await Produto.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategoria) {
      produtos = await Produto.find({
        categoria: {
          $in: [qCategoria],
        },
      });
    } else {
      produtos = await Produto.find();
    }

    res.status(200).json(produtos);
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

module.exports = router;
