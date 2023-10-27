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

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)
