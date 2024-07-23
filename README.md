# CRUD API using MongoDB and Node.js
=====================================

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js and MongoDB. The API allows users to perform basic operations on a MongoDB database.

## Features

### Create

* Create a new prodcut in the database

### Read

* Retrieve a list of all products
* Retrieve a single prodcut by ID

### Update

* Update an existing prodcut in the database

### Delete

* Delete a prodcut from the database

## Technologies Used

* **Node.js**: A JavaScript runtime environment
* **MongoDB**: A NoSQL prodcut-based database
* **Express.js**: A Node.js web framework for building web applications
* **Mongoose**: A MongoDB ORM (Object Relational Mapping) library for Node.js

## Getting Started

### 1. Clone the repository
```github
git clone https://github.com/Bouwatech1994/mongodb-crud.git

```
### 2. Install dependencies
```code 
npm install
```


### 3. Start the server
```code 
npm run  server
```

### 4. Open a web browser and navigate to `http://localhost:3000` to access the API

## API Endpoints

### GET /api/products

* Retrieve a list of all products

### GET /api/products/:id

* Retrieve a single prodcut by ID

### POST /api/products

* Create a new prodcut

### PUT /api/products/:id

* Update an existing prodcut

### DELETE /api/products/:id

* Delete a prodcut

## Environment Variables

* `MONGODB_CONNEXION`: The URL of the MongoDB  

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.