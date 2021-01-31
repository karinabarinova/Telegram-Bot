const { Sequelize } = require('sequelize');
require('dotenv').config()

var sequelize = new Sequelize(process.env.db, process.env.db_user, process.env.db_pass, {
    host: "localhost",
    dialect: "mysql",
    logging: true
})

module.exports = sequelize
