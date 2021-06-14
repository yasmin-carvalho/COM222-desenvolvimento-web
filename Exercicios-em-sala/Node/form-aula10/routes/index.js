var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form', {
        title: 'Formulário'
    });
});

router.post('/register', function (req, res, next) {
    const { name, age, email, languages, notify } = req.body

    res.render('formConfirm', {
        title: 'Formulário',
        name,
        age,
        email,
        languages,
        notify,
    });
});

module.exports = router;
