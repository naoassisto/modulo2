


/*
========================================================================================
//                      IMPLEMENTAÇÃO FUNÇÃO JQUERY                                   //
========================================================================================
*/

function myFunction() {
  document.getElementById("botao").innerHTML = "Obrigado por visitar meu curriculo";
}

/*
========================================================================================
//                                DATABASE                                            //
========================================================================================
*/

import { openDb } from './curri.js';
//import { createTable } from './curri.db';

import express from 'express';
const app = express()
const hostname = '127.0.0.1'; //endereço
const port = 3022; //numero da porta
var sqlite3 = require('sqlite3').verbose();
var rateLimit = require("express-rate-limit");
var bodyParser = require('body-parser') //trabalha sob "req.body"
var insert = 'INSERT INTO curriculo (formacao, experiencia, idiomas) VALUES (?,?,?)';
var get = 'SELECT * FROM curriculo';
var delet = "DELETE FROM curriculo WHERE id= '" + req.body.id + "'";


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

app.listen(proces.env.PORT, () => {
  console.log(`Server running at http://${hostname}:${port}.html`); // printa no console
});

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//   if (err) { // aparece o erro no console se ele existir
//       // Cannot open database
//       console.error(err.message)
//   } else {
//       console.log('Connected to the SQLite database.') // aparece isso no console se der bom
//   }
// });

module.exports = db


//createTable();

/*
========================================================================================
//                  ENPOINTS RELACIONADOS AO CURRICULO                           //
========================================================================================
*/

app.get('./curri.db', function (req, res) {
  res.send('Hello World')
})


app.get('/curri.db', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBSOURCE); // Abre o banco
  var sql = 'SELECT * FROM curriculo ORDER BY id COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
      res.json(rows);
  });
  db.close(); // Fecha o banco
});


app.post('./curri.db', function (req, res) {
  console.log(req.body);
  res.json({
    "statucCode": 200
  })
})

app.post('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM Colaborador WHERE CPF = '" + req.body.CPFColab + "'";
    var db = new sqlite3.Database(DBSOURCE); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

app.post("/curri.db", (req, res) => { //Método Post, pega os campos selecionados atraves das constantes e também envia para o banco de dados

  const idiomas = req.body.idiomas
  const experiencia = req.body.experiencia
  const formacao = req.body.formacao
  

  sql = `INSERT INTO curriculo (formacao, experiencia, formacao) VALUES ('${req.body.idiomas}','${req.body.experiencia}','${req.body.nomeformação}')`


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


/*
========================================================================================
//                            FUNÇÕES AJAX                                            //
========================================================================================
*/

//////////////////////////////


  $(document).ready(function(){
    function fetch_data(){
        $.ajax({
            url: "modulo2",
            method: "post",
            success: function(data){
                $('curriculo').html(data);
            }
        });
    }
    fetch_data();
  });

