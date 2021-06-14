var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { mensagem: 'Hello World!' });
});

router.get('/Ola', function(req, res, next) {
  res.render('index', { mensagem: 'Ola mundo!' });
});

router.get('/adeus', function(req, res, next) {
  res.render('index', { mensagem: 'Adeus!' });
});

module.exports = router;
