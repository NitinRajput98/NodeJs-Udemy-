const express = require("express");

const rootPath = require("../utils/path");

const path = require("path");

const router = express.Router();

router.use("/users", (req, res, next) => {
  res.status(200).sendFile(path.join(rootPath, "views", "users.html"));
});

module.exports = router;
