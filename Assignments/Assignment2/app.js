const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("in /users!");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("in / !");
//   res.send("/ path returned!");
// });

app.use("/users", (req, res, next) => {
  console.log("in /users!");
  res.send("user returned!");
});

app.use("/", (req, res, next) => {
  console.log("in / !");
  res.send("/ path returned!");
});

app.listen(3000);
