const express = require('express'); //Express
const mysql = require('mysql2'); //MYSQL
const app = express(); //app de Express

const mysqlConfig = require('./config/config'); //LLamando a las credenciales de la base de datos

const conexion = mysql.createConnection(mysqlConfig); //Conectandonos a la base de datos


//Viendo si funciona la base de datos
conexion.connect(function(error, results) {     
    if(error) throw error;

    console.log('Conectado Master');
});

//Pequeña consulta a la base de datos
conexion.query('SELECT * FROM usuarios', function(error, results) {
    if (error) throw error;

    results.forEach(results => {
        console.log(results.nombre);
    });
});






conexion.end();

app.listen(4000, function() {
    console.log('Iniciada exitosamente');
});