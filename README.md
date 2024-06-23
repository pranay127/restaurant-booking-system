
Restarunt Management System

Description
A Node.js application using Sequelize to manage a restaurant menu system with Restaurant and MenuItem models.

Prerequisites
Node.js (>= 14.x)
npm (>= 6.x)
MySQL (or compatible database)
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/yourproject.git
cd yourproject
Install dependencies:

sh
Copy code
npm install
Configure your database in config/config.json.

Run database migrations:

sh
Copy code
npx sequelize-cli db:migrate
Running the Application
sh
Copy code
node src/index.js
Testing
Install jest:
sh
Copy code
npm install --save-dev jest
Add to package.json:
json
Copy code
"scripts": {
  "test": "jest"
}
Run tests:
sh
Copy code
npx jest
