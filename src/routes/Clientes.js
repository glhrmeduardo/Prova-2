const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

// puxando dados do arquivo Cliente.html
novoCliente = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
}

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Cliente cadastrado com sucesso.',
    Cliente: novoCliente
  });
});


// PUT
// rota para atualizar seu veículo
rotas.put('/', (req, res) => {

const atualizaCliente = {
}

  res.status(200).send({
    mensagem: 'dados do Cliente foi atualizado',
    cliente: atualizaCliente
  });
});


// DELETE
// rota para excluir o veículo com seu id
rotas.delete('/:idcliente', (req, res) => {

const idCliente = req.params.idcliente;


  res.status(202).send({
    mensagem: `O cliente com o id de: ${idCliente} foi excluído com sucesso.`
  });
});

// exportar toda a configuração da rota
module.exports = rotas;