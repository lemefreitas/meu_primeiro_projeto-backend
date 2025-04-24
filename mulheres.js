const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    nome: "Simara Conceição",
    imagem: "000",
    minibio: "Desenvolvedora e Instrutora",
  },
  {
    nome: "Iana Chan",
    imagem: "111",
    minibio: "Fundadora da PrograMaria",
  },
  {
    nome: "Nina da Hora",
    imagem: "222",
    minibio: "Hacker Antirracista",
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}
function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
