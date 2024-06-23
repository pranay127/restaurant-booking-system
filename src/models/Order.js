const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Order = sequelize.define('Order', {
    items: {
        type: DataTypes.JSON,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});

module.exports = Order;
