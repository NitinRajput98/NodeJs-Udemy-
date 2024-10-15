const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const userNames = adminData.userName;
  res.render("shop", { users: userNames, pageTitle: "Shop" });
});

module.exports = router;
