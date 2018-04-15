var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //mongoose is configured to use ES6 built in promises
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); //mongoose handles keeping connection alive

module.exports = { mongoose };