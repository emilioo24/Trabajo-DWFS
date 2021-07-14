var express = require('express');
var router = express.Router();
const sqlcon = require('../utils/conexion');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/consultorios', function (req, res) {
  res.render('consultorios');
});

router.get('/preguntas', function (req, res) {
  res.render('preguntas');
});

router.get('/servicios', function (req, res) {
  res.render('servicios');
});

router.get('/contacto', function (req, res) {
  res.render('contacto');
});

router.post('/enviar', function (req, res) {
  console.log(req.body);
  const user = req.body;

  sqlcon.query(`INSERT INTO users(nombre, email, telefono, mensaje) 
  VALUES ('${user.nombre}', '${user.email}', '${user.telefono}', '${user.mensaje}')`, function (error, result) {
    if (error) {
      console.error(error);
      return res.render('contacto', { mensaje: "Error al enviar el mensaje", color: "red" });
    }
    res.render('contacto', { mensaje: "Mensaje enviado con éxito", color: "green" });
    console.log(result);
  });

});


router.get('/api', function (req, res) {
  res.json({ message: "" });
});

module.exports = router;
