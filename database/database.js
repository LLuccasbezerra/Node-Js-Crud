const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root','12345', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "+01:00"

} );

module.exports = connection;


