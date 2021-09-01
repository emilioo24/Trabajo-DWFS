const sqlcon = require('../utils/conexion');
var express = require('express');
var router = express.Router();

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
  const user = req.body;
  if (user.nombre === "") {
    return res.render('contacto', { mensaje: "Debe completar el campo nombre", color: "red" });
  } else if (user.email === "") {
    return res.render('contacto', { mensaje: "Debe completar el campo email", color: "red" });
  } else if (user.mensaje === "") {
    return res.render('contacto', { mensaje: "Debe completar el campo mensaje", color: "red" });
  } else {
    if (user.mensaje[0] !== "") {
      user.mensaje = user.mensaje[0];
    } else if (user.mensaje[1] !== "") {
      user.mensaje = user.mensaje[1];
    } else {
      user.mensaje = user.mensaje[2];
    }
    sqlcon.query(`INSERT INTO users(nombre, email, telefono, mensaje) 
    VALUES ('${user.nombre}', '${user.email}', '${user.telefono}', '${user.mensaje}')`, function (error, result) {
      if (error) {
        console.error(error);
        return res.render('contacto', { mensaje: "Error al enviar el mensaje", color: "red" });
      }
      res.render('contacto', { mensaje: "Mensaje enviado con éxito", color: "green" });
    });
  }
});

router.get('/admin', function (req, res) {
  res.render('admin');
});

router.get('/adminlog', function (req, res) {
  res.render('adminlog');
});

router.post('/verificar', function (req, res) {
  const adminUser = req.body;

  if (adminUser.user === "admin" && adminUser.password === "Pelvison24") {
    sqlcon.query(`SELECT * FROM users`, function (error, result) {
      if (error) {
        console.error(error);
      } else {
        res.render('admin', { resultado: result });
      }
    });
  } else {
    return res.render('adminlog', { error: "Datos erroneos" });
  }
});

module.exports = router;
