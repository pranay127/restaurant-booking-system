require('dotenv').config();
const axios = require('axios');
const  MenuItem  = require('../models/MenuItem')
const Restaurant=require('../models/Restaurant')

const populateDatabase = async () => {
    try {
        const response = await axios.get('https://api.spoonacular.com/food/menuItems/search', {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY,
                number: 20,
                query: 'Pizza'
            },
        });
   
        if (response.status === 200) {
            const menuItems = response.data.menuItems;

            for (let item of menuItems) {
                let restaurant = await Restaurant.findOne({ where: { name: item.restaurantChain } });
                
                if (!restaurant) {
                    restaurant = await Restaurant.create({
                        name: item.restaurantChain,
                        description: 'No description available'
                    });
                }

                await MenuItem.create({
                    name: item.title,
                    price: item.price || 0,
                    restaurantId: restaurant.id,
                });
            }

            console.log('Database populated successfully');
        } else {
            console.error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error occurred during database population:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
    }
};

module.exports = populateDatabase;
