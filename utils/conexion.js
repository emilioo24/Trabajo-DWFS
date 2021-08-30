const mysql = require('mysql2');
const mysqlConfig = require('../config/config');

const conexion = mysql.createConnection(mysqlConfig);
conexion.connect(function (error, result) {
  if (error) {
    console.error(error);
    console.log('ERROR');
    conexion.end();
  }

  console.log('Conectado Correctamente');
});

module.exports = conexion;