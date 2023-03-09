const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class UserService {
    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update( id, data ) {
        try {
            const updatedUser = await Users.update(data, { where: {id} });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    static async get( id ) {
        try {
            const data = await Users.findByPk(id, { attributes: ['username'], include: { model:Todos, include: { model: Categories } } })
            return data;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;