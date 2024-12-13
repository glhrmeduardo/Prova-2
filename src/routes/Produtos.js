const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

// puxando dados do arquivo index.html
novoProduto = {
    nome: req.body.nome,
    marca: req.body.marca,
    preco: req.body.preco,
    quantidade: req.body.quantidade
}

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Produto cadastrado com sucesso.',
    produto: novoProduto
  });
});


// PUT
// rota para atualizar seu produto
rotas.put('/', (req, res) => {

const atualizaProduto = {
}

  res.status(200).send({
    mensagem: 'dados do produto foram atualizados',
    produto: atualizaProduto
  });
});


// DELETE
// rota para excluir o produto com seu id
rotas.delete('/:idprodto', (req, res) => {

const idProduto = req.params.idProduto;


  res.status(202).send({
    mensagem: `Produto com o id de: ${idProduto} foi excluído com sucesso.`
  });
});

// exportar toda a configuração da rota
module.exports = rotas;