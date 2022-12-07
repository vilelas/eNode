const {
  verificarToken,
  verificarTokenEAutorizar,
  verificarTokenAdmin,
} = require("./verificarToken");

const Pedido = require("../models/Pedido");
const router = require("express").Router();

// Cadastrar novo pedido

router.post("/", verificarToken, async (req, res) => {
  const novoPedido = new Pedido(req.body);

  try {
    await novoPedido.save();
    res.status(500).json({ mensagem: "Pedido cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Atualizar carrinho

router.put("/:id", verificarTokenAdmin, async (req, res) => {
  try {
    const atualizacaoPedido = await Pedido.findByIdAndUpdate(
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

router.delete("/:id", verificarTokenAdmin, async (req, res) => {
  try {
    await Pedido.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: "Pedido excluído com sucesso" });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// Buscar pedido do usuário

router.get("/buscar/:usarioId", verificarTokenEAutorizar, async (req, res) => {
  try {
    const pedido = await Pedido.find({ userId: req.params.usuarioId });
    res.status(200).json({ pedido });
  } catch (erro) {
    res.status(500).json({ mensagem: `${erro}` });
  }
});

// // Listar todos os pedidos dos usuários

router.get("/", verificarTokenAdmin, async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Obter renda mensal

router.get("/renda", verificarTokenAdmin, async (req, res) => {
  const data = new Date();
  const ultimoMes = new Date(data.setMonth(data.getMonth() - 1));
  const proximoMes = new Date(new Date().setMonth(ultimoMes.getMonth() - 1));

  try {
    const renda = await Pedido.aggregate([
      { $match: { createdAt: { $gte: proximoMes } } },
      {
        $project: {
          mes: { $month: "$createdAt" },
          vendas: "$valorTotal",
        },
      },
      {
        $group: {
          _id: "$mes",
          total: { $sum: "$vendas" },
        },
      },
    ]);
    res.status(200).json(renda);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
