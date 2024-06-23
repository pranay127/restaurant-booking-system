const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const { Op } = require('sequelize');


// Search restaurants by name or dishes
exports.searchRestaurants = async (req, res) => {
    const name = req.query.name;

    console.log('here...............',req)

    try {
        // Find restaurants matching the query by name or by menu item name
        const restaurants = await Restaurant.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
          
        });

        res.json(restaurants);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

// Get restaurant details by ID
exports.getRestaurantDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const restaurant = await Restaurant.findByPk(id, {
            include: MenuItem
        });

        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
