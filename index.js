const express = require('express'); //Express
const mysql = require('mysql2'); //MYSQL
const app = express(); //app de Express

const mysqlConfig = require('./config/config'); //LLamando a las credenciales de la base de datos
const conexion = mysql.createConnection(mysqlConfig); //Conectandonos a la base de datos


app.use(express.json());

//Viendo si funciona la base de datos
conexion.connect(function(error, results) {     
    if(error) throw error;

    console.log('Conectado a la Base de Datos');
});


app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile('index.html', {
        root: __dirname + '/public/'
    });
});

app.use('/', express.static(__dirname + '/public/'));




conexion.end();

app.listen(4000, function() {
    console.log('Aplicación Iniciada');
});