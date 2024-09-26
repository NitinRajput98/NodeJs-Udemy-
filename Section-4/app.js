// const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use((req, res, next) => {
//   console.log("Into my Middleware!");
//   next(); // Allows the request to continue to the next middleware in line!
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/favicon.ico", (req, res, next) => {
  res.status(204).end();
});

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

// app.use("/add-product", (req, res, next) => {
//   console.log("'/add-product' path handler executed!");
//   res.send("<h1>Add Product Page!</h1>");
// });

// app.use("/", (req, res, next) => {
//   console.log(req.url);
//   console.log("'/ path handler executed!'");
//   res.send("<h1>This is my page header!</h1>");
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
