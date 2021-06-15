var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/formcep', function(req, res, next) {
    res.render('mostraTemp');
});

router.get('/buscarcep', function(req, res) {
    const cep = req.body.cep;
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => {
            console.log(resp);
            const cidade = resp.data.localidade
            var db = require("../db");
            var Municipio = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
            Municipio.findOne({cidade: cidade}).lean().exec(
                async function (e, docs) {
                    res.render('mostraResult', { "mostraResult": docs });
                });
        })
        .catch(resp => {
            console.log('error');
        });
});

/* GET municipiolist page. */
router.get('/municipiolist', function(req, res) {
    var db = require("../db");
    var Municipios = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Municipios.find({}).lean().exec(
       function (e, docs) {
           res.render('municipiolist', { "municipiolist": docs });
       });
});

/* GET newuser page. */
router.get('/newmunicipio', function (req, res, next) {
    res.render('newmunicipio', { title: 'New Municipio' });
});

/* POST to Add User Service */
router.post('/addmunicipio', function (req, res) {

    var db = require("../db");
    var cidade = req.body.cidade;
    var temp = req.body.temp;

    var Municipio = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var municipio = new Municipio({ cidade: cidade, temp: temp });
    municipio.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("municipiolist");
        }
    });
});

module.exports = router;
