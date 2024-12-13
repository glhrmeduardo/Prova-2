const express = require('express');
const fs = require('fs');

const bodyParser = require('body-parser');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 8000;

// criação do aplicativo servidor
const app = express();

// confguração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// importar as configurações de Clientes
const clientesRotas = require('./src/routes/Clientes');

// rota raiz do servidor

app.get('/cliente', (req, res) => {

 const arquivoHtml = fs.readFileSync('./src/pages/Clientes.html');

  // responder com o código do arquivo .html
  res.status(200).end(arquivoHtml);

});


// importar as configurações de Produtos
const produtosRotas = require('./src/routes/Produtos');

// rota raiz do servidor

app.get('/produto', (req, res) => {

 const arquivoHtml = fs.readFileSync('./src/pages/index.html');

  // responder com o código do arquivo .html
  res.status(200).end(arquivoHtml);

});



// configurar as rotas para veiculo
app.use('/cliente', clientesRotas);
app.use('/produto', produtosRotas);

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));