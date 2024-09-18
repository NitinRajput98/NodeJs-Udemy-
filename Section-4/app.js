const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Into my Middleware!");
  next(); // Allows the request to continue to the next middleware in line!
});

app.use((req, res, next) => {
  res.send("<h1>This is my page header!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
