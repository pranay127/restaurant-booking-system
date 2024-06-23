// src/models/Restaurant.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Restaurant extends Model {}

Restaurant.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue: 'No description available'
    }
}, {
    sequelize,
    modelName: 'Restaurant'
});

module.exports = Restaurant;
