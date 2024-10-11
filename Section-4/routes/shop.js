const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const routesData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = routesData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    productCSS: true,
    activeShop: true,
  });
});

module.exports = router;
