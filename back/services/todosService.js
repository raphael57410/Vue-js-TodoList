const Todo = require('../models/Todos');

exports.list = () => {
    return Todo.find();
}