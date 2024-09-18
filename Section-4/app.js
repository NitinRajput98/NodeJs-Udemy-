// const http = require("http");

const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Into my Middleware!");
//   next(); // Allows the request to continue to the next middleware in line!
// });

app.use("/favicon.ico", (req, res, next) => {
  res.status(204).end();
});

app.use("/", (req, res, next) => {
  console.log("Always handler executed!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("'/add-product' path handler executed!");
  res.send("<h1>Add Product Page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log(req.url);
  console.log("'/ path handler executed!'");
  res.send("<h1>This is my page header!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
