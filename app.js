const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  {id: 1, nome: "Camisa Nike Preta", preco: "R$ 320", descricao: "Camisa bem boa", imagens: "/imagens/camisa_preta.png"},
  {id: 2, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.png"},
  {id: 3, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.png"},
  {id: 4, nome: "Camisa Nike Branca", preco: "R$ 450", descricao: "Camisa bem boa", imagens: "/imagens/camisa_branca.png"},
  {id: 5, nome: "Camisa Nike Branca", preco: "R$ 450", descricao: "Camisa bem boa", imagens: "/imagens/camisa_branca.png"},
  {id: 6, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.png"},
  {id: 7, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.png"},
  {id: 8, nome: "Camisa Nike Preta", preco: "R$ 320", descricao: "Camisa bem boa", imagens: "/imagens/camisa_preta.png"},
  {id: 9, nome: "Camisa Nike Vinho", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_vinho.png"},
  {id: 10, nome: "Camisa Nike Azul", preco: "R$ 220", descricao: "Camisa bem boa", imagens: "/imagens/camisa_azul.png"},
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

app.get('/produto/:id', (req, res) => {
  const produto = buscarProdutosPorID(req.params.id)
  res.render('produto', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

