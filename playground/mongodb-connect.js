//mongo client lets you connect to mongo server
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //using object destructiring

//object destructuring is ES6 feature lets you pull out properties from an object creating variables
//var user ={
//    name: 'Nikola',
//    age: 30
//};
//
//var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server');

    //db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: 'false'
    //}, (err, result) => {
    //    if(err){
    //        return console.log('Unable to insert todo', err);
    //    }
    //
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //});

    //db.collection('Users').insertOne({
    //    name: 'Nikola',
    //    age: 30,
    //    location: 'Novi Sad'
    //
    //}, (err, result) => {
    //    if(err){
    //        return console.log('Unable to insert user', err);
    //    }
    //
    //    //console.log(JSON.stringify(result.ops, undefined, 2));
    //    console.log(result.ops[0]._id.getTimestamp());
    //});

    //closes the connection to MongoDB server
    db.close();
});