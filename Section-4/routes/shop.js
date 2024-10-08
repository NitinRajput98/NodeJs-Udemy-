const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const routesData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop.pug");
});

module.exports = router;
