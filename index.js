const express = require("express");
const server = express();

//http://localhost:3000/hello/?nome=Gustavo&idade=25
// Query params = ?nome=Gustavo&idade=25
// *Parametros de consultas são opcionais*

//http://localhost:3000/hello/Gustavo
// Route params = /hello/:nome
// *Parametros de rotas são obrigatórios*

// Request body = { "name": "Gustavo", "idade": 25 }

server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: "Hello World",
    message: `Hello ${nome} welcome to my API !`,
    idade: idade,
  });
});

// http://localhost:3000/hello
// Body params = { "nome": "Gustavo", "idade": 25 }

server.get("/hello/:nome", (req, res) => {
  const { nome, idade } = req.params;

  return res.json({
    title: "Hello World",
    message: `Hello ${nome} welcome to my API !`,
  });
});

server.listen(3000);
