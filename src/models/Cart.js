const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Cart = sequelize.define('Cart', {
    items: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = Cart;
