<<<<<<< HEAD
NodeJS Article CRUD Project

This is a Node.js project that showcases how to perform CRUD (Create, Read, Update, Delete) operations on an Article entity using promises and async/await. The project includes both server-side rendered pages and client-side rendered pages.
Features

    Params and Query Parameters: The project demonstrates how to read params and query parameters from HTTP requests.
    Server-Side Rendering: Server-side rendering is implemented using the EJS templating engine. It allows for dynamic content generation on the server before sending it to the client.
    Client-Side Rendering: Certain components of the page are rendered on the client-side using JavaScript and AJAX, providing an interactive user experience.
    CRUD Operations: The project showcases how to perform CRUD operations on the Article entity using a MongoDB database. It includes creating, reading, updating, and deleting articles.

Prerequisites

Before running the project, ensure that you have the following installed on your machine:

    Node.js
    MongoDB

Installation

    Clone the repository:

git clone https://github.com/your-username/nodejs-article-crud.git
```

Navigate to the project directory:

cd nodejs-article-crud
```

Install dependencies:

    npm install
    ```

Usage

    Start the server:

    npm start
    ```

    Open your web browser and navigate to http://localhost:3000 to access the application.

Project Structure

The project structure is organized as follows:
arduino

- controllers/        // Contains controllers for handling HTTP requests
- models/             // Defines the Article entity and interacts with the database
- routes/             // Defines routes and maps them to controller functions
- views/              // Contains EJS templates for rendering HTML pages
- public/             // Contains static assets such as CSS and client-side JavaScript files
- app.js              // Entry point of the application, sets up the server
- config.js           // Configuration file for connecting to the MongoDB database

Configuration

The project uses a config.js file to establish a connection with the MongoDB database. Ensure that you have MongoDB installed and running, and update the config.js file with your database connection details.
Contributing

Contributions to this project are welcome. Feel free to open issues or submit pull requests for any improvements or new features you would like to add.
License

This project is licensed under the MIT License.
Acknowledgements

    Node.js
    Express
    EJS
    MongoDB
=======
# NodeJS Article CRUD Project

This Node.js project demonstrates how to perform CRUD operations on an Article entity using promises and async/await. The project includes both server-side rendered pages and client-side rendered pages.

## Features

- Read params and query parameters from HTTP requests
- Server-side rendering of pages using EJS templates
- Client-side rendering of pages using JavaScript and AJAX
- CRUD operations on the Article entity using a MongoDB database

## Prerequisites

To run the project, you need to have the following installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/SalmaAhmedAl/nodejs-project.git
   ```

2. Navigate to the project directory:

   ```
   cd nodejs-project
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

The project structure is organized as follows:

```
- controllers/        // Contains controllers for handling HTTP requests
- models/             // Defines the Article entity and interacts with the database
- views/              // Contains EJS templates for rendering HTML pages
- app.js              // Entry point of the application, sets up the server
```
![Articles](.\snapshoots\articles.jpg)

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)
>>>>>>> fa373fcf8735cbe2077dd897226bb82646955c70
