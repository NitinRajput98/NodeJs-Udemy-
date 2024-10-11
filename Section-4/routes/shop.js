const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const routesData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: routesData.products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: routesData.products.length > 0,
  });
});

module.exports = router;
