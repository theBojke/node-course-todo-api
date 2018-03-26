//Root of the application, responsible only for express routes
var express = require('express');
var bodyParser = require('body-parser'); //let us send JSON to the server

var {mongoose} = require('./db/mongoose'); //same as var mongoose = require('./mongoose').mongoose;
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //adding parsing middleware

//creating a new todo
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};