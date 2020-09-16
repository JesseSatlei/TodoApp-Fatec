const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoDB = 'mongodb://localhost/todo';
module.exports = mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });