const Todo = require('../models/Todos');
const todoServices = require("../services/todosService");

exports.list = async (req, res) => {
    try {
        const todos = await todoServices.list();
        if (todos) res.status(200).json(todos);
    } catch (e) {
        res.status(400).send('erreur' + e);
    }
}

exports.add = async (req, res) => {
    const { body } = req.body;
    try {
        const newTodo = new Todo()
        newTodo.description = body.description;
        newTodo.done = false;
        newTodo.save();
        res.send(newTodo);
        res.status(201);
    } catch (error) {
        console.log(error);
    }
}

exports.edit = async (req, res) => {
    const { body } = req.body;
    Todo.findByIdAndUpdate(body._id, { description: body.description, done: body.done }, (err) => {
        if (err) res.send('une erreur c\'est produite!');

        res.status(200).send(body);
    });
}

exports.delete = async (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err) => {
        if (err) res.send('une erreur c\'est produite!');

        res.status(200).send('todo supprimé!');
    });
}