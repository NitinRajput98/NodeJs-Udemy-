const path = require("path");

const express = require("express");

const rootPath = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).sendFile(path.join(rootPath, "views", "main.html"));
});

module.exports = router;
