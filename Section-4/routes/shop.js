const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("in / path");
  res.send("<h1>This is my main page!</h1>");
});

module.exports = router;
