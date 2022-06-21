
function myFunction() {
  document.getElementById("botao").innerHTML = "Obrigado por visitar meu curriculo";
}

//func do jquery
//import { openDb } from './curri';
import { createTable } from './Controle/contro';

import express from 'express';
const app = express()
const hostname = '127.0.0.1';
const port = 3022;
var sqlite3 = require('sqlite3').verbose();
var rateLimit = require("express-rate-limit");

app.use(express.static("../Front/"));
app.use(express.json());

const DBSOURCE = "curri.db" // responsável pela operação do bd
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(express.urlencoded({
  extended: true
}))

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}.html`); // printa no console
});

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) { // aparece o erro no console se ele existir
      // Cannot open database
      console.error(err.message)
      throw err
  } else {
      console.log('Connected to the SQLite database.') // aparece isso no console se der bom
  }
});

module.exports = db


//createTable();



app.get('./curri.db', function (req, res) {
  res.send('Hello World')
})



app.post('./curri.db', function (req, res) {
  console.log(req.body);
  res.json({
    "statucCode": 200
  })
})

app.post("/curriculo", (req, res) => { //Método Post, pega os campos da ficha de insumos e também envia para o banco de dados

  const idiomas = req.body.idiomas
  

  sql = `INSERT INTO Doacoes (Data, Anonimo, Nome, CPF, NomeProduto, Email, Ajuda, Observacoes) VALUES ('${req.body.dataInsumos}','${req.body.AnonimoIns}','${req.body.nomeInsumos}', '${req.body.CPFInsumos}', '${req.body.NomeProduto}', '${req.body.emailInsumo}', '${req.body.AjudaIns}', '${req.body.ObsInsumos}')`

  var db = new sqlite3.Database(DBSOURCE); // Abre o banco
  db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

//app.listen(3000, ()=>console.log("supostamente funciona"))
