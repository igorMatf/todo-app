const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    isFinished: Boolean
});

const todosModel = new mongoose.model('Todos', todosSchema);
module.exports = todosModel;