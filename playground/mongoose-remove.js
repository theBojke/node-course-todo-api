const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

//removes all documents
//Todo.remove({}).then((result) => {
//   console.log(result);
//});

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5ad134feaf722217007937bb').then((todo) => {
    console.log(todo);
});