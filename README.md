# Restaurant Management System

## Description

A Node.js application using Sequelize to manage a restaurant menu system with `Restaurant` and `MenuItem` models.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MySQL (or compatible database)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Configure your database:**
   
   Update your database configuration in `config/config.json`.

4. **Run database migrations:**

    ```sh
    npx sequelize-cli db:migrate
    ```

## Running the Application

```sh
node src/index.js
