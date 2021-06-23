var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/registro');

var userSchema = new mongoose.Schema({
    nome: String,
    cpf: Number,
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }