const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  {id: 1, nome: "Camisa Nike Preta", preco: "R$ 320", descricao: "Camisa bem boa", imagens: "/imagens/camisa_preta.webp"},
  {id: 2, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.webp"},
  {id: 3, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.webp"},
  {id: 4, nome: "Camisa Nike Branca", preco: "R$ 450", descricao: "Camisa bem boa", imagens: "/imagens/camisa_branca.webp"},
  {id: 5, nome: "Camisa Nike Branca", preco: "R$ 450", descricao: "Camisa bem boa", imagens: "/imagens/camisa_branca.webp"},
  {id: 6, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.webp"},
  {id: 7, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.webp"},
  {id: 8, nome: "Camisa Nike Preta", preco: "R$ 320", descricao: "Camisa bem boa", imagens: "/imagens/camisa_preta.webp"},
  {id: 9, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.webp"},
  {id: 10, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.webp"},
  {id: 11, nome: "Camisa Nike Branca", preco: "R$ 450", descricao: "Camisa bem boa", imagens: "/imagens/camisa_branca.webp"},
  {id: 12, nome: "Camisa Nike Preta", preco: "R$ 320", descricao: "Camisa bem boa", imagens: "/imagens/camisa_preta.webp"}
]

function buscarProdutosPorID (id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', { produtos });
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

