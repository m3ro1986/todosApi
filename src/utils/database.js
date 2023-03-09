const {Sequelize, Model} = require('sequelize');

const db = new Sequelize({
    database: 'todos',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    dialect: 'postgres'
})

module.exports = db;