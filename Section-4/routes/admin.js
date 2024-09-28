const express = require("express");
const path = require("path");

const router = express.Router();

// /admin/add-product => get
router.get("/add-product", (req, res, next) => {
  console.log(req.url);
  console.log("'/ path handler executed!'");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/product => post
router.post("/product", (req, res, next) => {
  console.log(req.body, "In /product path");
  res.redirect("/");
});

module.exports = router;
