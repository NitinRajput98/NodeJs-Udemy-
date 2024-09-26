const express = require("express");

const router = express.Router();

// /admin/add-product => get
router.get("/add-product", (req, res, next) => {
  console.log(req.url);
  console.log("'/ path handler executed!'");
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='title'/><button type='submit'>Add product!</button></form>"
  );
});

// /admin/product => post
router.post("/product", (req, res, next) => {
  console.log(req.body, "In /product path");
  res.redirect("/");
});

module.exports = router;
