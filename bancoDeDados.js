const mongoose = require("mongoose");
require("dotenv").config();

async function conectaBancoDedados() {
  try {
    console.log("A conexão com banco de dados iniciou");

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Conexão com banco de dados feita com sucesso!!");
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = conectaBancoDedados;
