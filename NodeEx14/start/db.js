var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:Themaster1234@ds045242.mongolab.com:45242/flights');

module.exports = mongoose.connection;