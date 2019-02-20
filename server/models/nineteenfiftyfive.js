const mongoose = require('mongoose');

var NineteenFiftyFiveSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1}},
    {timestamps: true });

var NineteenFiftyFive = mongoose.model('1955', NineteenFiftyFiveSchema); // We are retrieving this Schema from our Models, named 'Animal'
module.exports = {NineteenFiftyFive:NineteenFiftyFive};