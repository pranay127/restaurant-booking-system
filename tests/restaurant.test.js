const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js
const populateDatabase = require('../src/services/spoonacularService'); // Adjust the path as necessary

describe('Restaurant Search Endpoint', () => {
    beforeAll(async () => {
        await populateDatabase();
    });

    it('should search by restaurant name', async () => {
        const response = await request(app)
            .get('/api/restaurants')
            .query({ name: 'Pizza Hut' });
        console.log(response)
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            {
                "id": 2,
                "name": "Pizza Hut",
                "description": "No description available",
                "createdAt": "2024-06-23T18:51:16.516Z",
                "updatedAt": "2024-06-23T18:51:16.516Z"
            }
        ]));
    });

    it('should search by dish name', async () => {
        const response = await request(app)
            .get('/api/restaurants')
            .query({ name: 'Pizza' });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([ {
            "id": 2,
            "name": "Pizza Hut",
            "description": "No description available",
            "createdAt": "2024-06-23T18:51:16.516Z",
            "updatedAt": "2024-06-23T18:51:16.516Z"
        }
        ]));
    });
});
