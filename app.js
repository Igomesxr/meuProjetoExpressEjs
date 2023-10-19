const express = require('express');
const app = express();
const port = 3000;

const produto = [
  {id: 1, nome: "nome do produto", preco: "320", descricao: "descrição do produto", imagens: "produto.jpg"}
]

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', { message: 'Olá, Mundo!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, kjyuoyiu!' });
});

app.get('/teste', (req, res) => {
  res.render('teste', { message: 'Olá, kjyuoyiu!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

