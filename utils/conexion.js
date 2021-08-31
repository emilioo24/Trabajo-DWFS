const mysql = require('mysql2');
const { promisify } = require('util');
const mysqlConfig = require('../config/config');

const conexion = mysql.createPool(mysqlConfig);
conexion.getConnection(function (error, result) {
  if (error) {
    console.log("ERROR");
    console.error(error);
  }
  
  console.log('Conectado Correctamente');
});

conexion.query = promisify(conexion.query);

module.exports = conexion;