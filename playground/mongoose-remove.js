const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a3f92a6fb63188ac92d1b0c'}).then((todo) => {

// });

Todo.findByIdAndRemove('5a3f92a6fb63188ac92d1b0c').then((todo) => {
    console.log(todo);
});