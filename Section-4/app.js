const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use("/favicon.ico", (req, res, next) => {
  res.status(204).end();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
