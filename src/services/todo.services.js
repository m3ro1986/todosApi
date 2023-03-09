const Todos = require("../models/todos.model");

class todoService {
    static async create(newTodo) {
        try {
            const todoCreated = await Todos.create(newTodo);
            return todoCreated;
        } catch (error) {
            throw error;
        }
    }
    static async update( id, data ) {
        try {
            const updatedTodo= await Todos.update(data, { where: {id} });
            return updatedTodo;
        } catch (error) {
            throw error;
        }
    }
    static async delete( id ) {
        try {
            await Todos.destroy({where: {id}});
            
        } catch (error) {
            throw error;
        }
    }


}

module.exports = todoService;