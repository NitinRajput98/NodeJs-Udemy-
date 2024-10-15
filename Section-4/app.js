const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

// const handleHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "handlebars",
//   handleHbs({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" })
// );
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use("/favicon.ico", (req, res, next) => {
  res.status(204).end();
});

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not found", path: "" });
});

app.listen(3000);
