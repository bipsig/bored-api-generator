# Bored API Generator

This project is a simple web application that helps you find activities to do when you're bored. It uses the Bored API to fetch random activities based on selected criteria. The application is built using Express.js and Axios, and it demonstrates how to handle API requests and render data on a webpage.

## Table of Contents

- [Project Overview](#project-overview)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Project Overview

"Bored API Generator" is a web application where users can find activities to do when they are bored. Users can select the type of activity and the number of participants, and the app fetches a random activity that matches the criteria from the Bored API. If no criteria are selected, a random activity is fetched.

## Dependencies

The project uses the following dependencies:

- [Express](https://expressjs.com/) - A web application framework for Node.js
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js
- [body-parser](https://github.com/expressjs/body-parser) - Middleware for parsing incoming request bodies in a middleware before your handlers, available under the `req.body` property
- [EJS](https://ejs.co/) - Embedded JavaScript templates

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/bipsig/bored-api-generator.git
    cd im-bored
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

The server will be running on `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Select the type of activity and the number of participants, then click the "Go" button.
3. The app will display a random activity that matches the selected criteria. If no criteria are selected, a random activity will be fetched.

## Acknowledgments

This project was created to learn how to use Axios for making HTTP requests. Special thanks to the creators of the Bored API for providing the API used in this project.

---
