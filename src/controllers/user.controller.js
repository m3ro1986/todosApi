const UserService = require("../services/user.service");

const createUser = async ( req, res ) => {
    try {
        const newUser = req.body;
        const result = await UserService.create(newUser);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async ( req, res ) => {
    try {
        const {id} = req.params;
        const updateData = req.body;
        await UserService.update(id, updateData);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

const getTodos = async ( req, res ) => {
    try {
       const {id} = req.params;
       const data = await UserService.get(id)
       res.json(data)
    } catch (error) {
        res.status(400).json(error) 
    }
}

module.exports = { createUser, updateUser, getTodos }