/* 

PACKAGE MANAGERS
npm, yarn, pnpm


HTTP METHODS
GET: Fetch data from a server, Fetching a list of users on a platform
POST: Used to create data (resource) on the server; Create a new user on your platform
PUT: Used to update or replace an existing resource; Updating a user profile //name, email, phone number, address, nin, account number
PATCH: Used to partially update a resource; 
DELETE: Used to delete a resource; Deactivate my account

NodeJS Frameworks
- Expressjs
- Nestjs
- Koa
- Sailsjs

GITIGNORE
ENVIRONMENT VARIABLES (ENV) 

REST, SOAP, GraphQL, tRPC

REST - JSON 

HTTP STATUS CODES
1xx - Information 100 - Continue
2xx - Sucess 200 - Successful 
3xx - Redirection 301, 302
4xx - Client Errors 400, 401 (authentication), 403 (authorization)
5xx - Server error 500 Internal server error, 502 Bad Gateway

TODO:
Read about Caching, Middlewares, Controllers, routes, MVC
 

//A TODO API

*/

const express = require("express");
require("dotenv").config()
const app = express(); //Create your express application
const PORT = process.env.PORT || 3500; //Read about PORTS

app.use(express.json()); //Middleware

app.get("/hello", (req, res) => {
    return res.status(200).json({
        "success": true,
        "message": "Welcome to our Express API"
    });
});

app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    const query = req.query.search;
    const message = query ? `Hello ${name}! Welcome to the API, here's your query param: ${query}` : `Hello ${name}! Welcome to the API`;
    return res.status(200).json({
        "success": true,
        "message": message
    });
});

app.post("/hello", (req, res) => {
    const { name, email } = req.body;
    if(!name || !email) {
        return res.status(400).json({
            "success": false,
            "message": "Name and email is required"
        });
    }    
    const message =`Hello ${name}! Welcome to the API, here's your email: ${email}, your account has been created`;
    return res.status(200).json({
        "success": true,
        "message": message
    });
});



app.listen(PORT, () => console.log(`Server is running on ${PORT}`));











