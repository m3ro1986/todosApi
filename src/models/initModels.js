const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');

const initModels = () => {
    Users.hasMany(Todos, {foreignKey:'user_id'});
    Todos.belongsTo(Users, {foreignKey:'user_id'});
    Categories.hasMany(Todos, {foreignKey:'category_id'});
    Todos.belongsTo(Categories, {foreignKey:'category_id'});
}

module.exports = initModels;