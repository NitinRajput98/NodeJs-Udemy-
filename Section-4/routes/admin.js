const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

// /admin/add-product => get
router.get("/add-product", (req, res, next) => {
  console.log(req.url);
  console.log("'/ path handler executed!'");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product => post
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log("Admin,js", products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
