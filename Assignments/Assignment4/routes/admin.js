const express = require("express");

const router = express.Router();

const userNames = [];

router.post("/users", (req, res, next) => {
  const body = req.body;
  if (body.userName.length !== 0 && !body.userName.includes(" ")) {
    userNames.push(body.userName);
  }
  res.redirect("/");
});

router.post("/empty-list", (req, res, next) => {
  userNames.length = 0;
  res.redirect("/");
});

exports.routes = router;
exports.userName = userNames;
