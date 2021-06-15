var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prova');

var userSchema = new mongoose.Schema({
    cidade: String,
    temp: Number,
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }