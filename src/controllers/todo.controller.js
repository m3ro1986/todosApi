const todoService = require("../services/todo.services");

const createTodo = async ( req, res ) => {
    try {
        const newTodo = req.body;
        const todo = await todoService.create(newTodo);
        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}

const changeStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        await todoService.update(id, data);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await todoService.delete(id)
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = { createTodo, changeStatus, deleteTodo }