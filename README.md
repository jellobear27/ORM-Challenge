# E-commerce Back End Starter Code
# E-commerce Back-End Application

This is the README.md file for an E-commerce back-end application, which serves as a backend for an e-commerce website. The application is built using Node.js and utilizes the Sequelize ORM (Object-Relational Mapping) for interacting with a MySQL database. It provides a RESTful API for managing product categories, products, and tags, allowing users to create, read, update, and delete data in the database.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Database](#database)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Insomnia-Test-Video](#insomnia-test-video)
- [Credits](#credits)
- [Contact](#contact)

## Prerequisites
Before running this application, you should have the following prerequisites installed on your system:
- Node.js
- MySQL database server
- A package manager like npm or yarn

## Installation
1. Clone the repository to your local machine:

git clone: https://github.com/jellobear27/ORM-Challenge.git

2. Navigate to the project directory: cd ecommerce-backend


3. Install the project dependencies using npm or yarn: npm install


4. Set up your MySQL database:
- Create a MySQL database using the provided SQL script in `./db/schema.sql`. You can execute the script in your MySQL client or use a tool like phpMyAdmin.
- Update the database configuration in `./config/connection.js` with your MySQL server details.

5. Start the application: npm start


The application will run on http://localhost:3005.

## Usage
The E-commerce back-end application provides a set of API endpoints for managing products, categories, and tags. You can interact with the API using tools like [Postman](https://www.postman.com/) or by integrating it into your front-end application.

To test the API, you can use the provided routes for products, categories, and tags. The routes include operations such as retrieving all products, creating a new product, updating a product, and deleting a product.

## Folder Structure
- `models`: Contains Sequelize models for Product, Category, Tag, and ProductTag.
- `routes`: Defines API routes for products, categories, and tags.
- `config`: Database configuration files.
- `db`: Contains the SQL schema file for database setup.
- `seeders`: Seed data for populating the database with sample records.

## Database
The application uses a MySQL database to store product, category, and tag information. The database schema and relationships are defined using Sequelize models.

## API Routes
The application provides the following API routes:

- **Categories**
- GET `/api/categories`: Retrieve all categories with associated products.
- GET `/api/categories/:id`: Retrieve a specific category by ID with associated products.
- POST `/api/categories`: Create a new category.
- PUT `/api/categories/:id`: Update a category by ID.
- DELETE `/api/categories/:id`: Delete a category by ID.

- **Products**
- GET `/api/products`: Retrieve all products with associated category and tags.
- GET `/api/products/:id`: Retrieve a specific product by ID with associated category and tags.
- POST `/api/products`: Create a new product.
- PUT `/api/products/:id`: Update a product by ID.
- DELETE `/api/products/:id`: Delete a product by ID.

- **Tags**
- GET `/api/tags`: Retrieve all tags with associated products.
- GET `/api/tags/:id`: Retrieve a specific tag by ID with associated products.
- POST `/api/tags`: Create a new tag.
- PUT `/api/tags/:id`: Update a tag by ID.
- DELETE `/api/tags/:id`: Delete a tag by ID.

## Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## insomnia-test-video: https://drive.google.com/file/d/1iX0PaDjnCanEQv7jqygaoFB3nuiTs_7T/view?usp=sharing


## Credits
-Tutor / TA: Samuel Cordova
-Tutor / TA: Bobbi Tarkany


## Contact
If you have any questions or need further assistance, you can contact the project maintainers:

- Janell Smith
- GitHub: [jellobear27](https://github.com/jellobear27)
- Email: jdstar17@gmail.com


Thank you for using our E-commerce back-end application! We hope it serves your needs effectively.



