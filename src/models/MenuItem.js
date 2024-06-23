const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Restaurant = require('./Restaurant'); // Ensure you import the Restaurant model

const MenuItem = sequelize.define('MenuItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Restaurants', // Note the model name here, which should match the table name
            key: 'id'
        }
    }
});

// Define associations
MenuItem.belongsTo(Restaurant, {
    foreignKey: 'restaurantId',
    as: 'restaurant'
});

module.exports = MenuItem;
