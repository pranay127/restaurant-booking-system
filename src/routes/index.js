const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
console.log(restaurantController)
const orderController = require('../controllers/orderController');

// Restaurant routes
router.get('/restaurants', restaurantController.searchRestaurants);
router.get('/restaurants/:id', restaurantController.getRestaurantDetails);

// Order routes
router.post('/cart', orderController.addToCart);
router.get('/cart', orderController.getCart);
router.post('/order', orderController.placeOrder);

module.exports = router;
