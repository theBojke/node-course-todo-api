const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var userId = '5ab5468374c9b67810e34fec';

User.findById(userId).then((user) => {
    if(!user){
        return console.log('Unable to find user.');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

//var id = '5ab974704442c8d80b3d8dd7';
//
//if(!ObjectID.isValid(id)){
//    console.log('Id not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos)
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo)
//});

//Todo.findById(id).then((todo) => {
//    if(!todo){
//        return console.log('Id not found!');
//    }
//    console.log('Todo By Id', todo);
//}).catch((e) => console.log(e));

