const {MongoClient, ObjectID} = require('mongodb'); //using object destructiring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server');

    //find returns cursor that is a pointer to data
    //db.collection('Todos').find({
    //    _id: new ObjectID('5ab2abc5d220e722c0e1303b')
    //}).toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch todos', err);
    //});

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});