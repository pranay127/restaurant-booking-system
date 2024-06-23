const { Sequelize } = require('sequelize');
console.log(process.env.USER, process.env.PASSWORD)
// Set up the Sequelize instance
const sequelize = new Sequelize('restaurantdb1', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: true, // Disable logging or use a function to customize
});

// Export the Sequelize instance
module.exports = sequelize;
