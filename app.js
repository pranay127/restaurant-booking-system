require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/models'); // Ensure this points to your sequelize instance
const routes = require('./src/routes');
const  populateDatabase  = require('./src/services/spoonacularService');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await populateDatabase();
});

sequelize.sync(); // Sync database models

module.exports = app;
