var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registra", function(req, res, next) {
  const { name, email } = req.body;

  // Numa aplicação real: validar usuário; registrá-lo no banco; enviar email de confirmação

  res.render("registrado", {
    title: "Você está registrado",
    name,
    email
  });
});


module.exports = router;
