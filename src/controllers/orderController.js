const Cart = require('../models/Cart');
const Order = require('../models/Order');

// Add items to cart
exports.addToCart = async (req, res) => {
    const { items } = req.body;

    try {
        const cart = await Cart.create({ items });

        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findAll();

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Place order
exports.placeOrder = async (req, res) => {
    const { items, total } = req.body;

    try {
        const order = await Order.create({ items, total });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
