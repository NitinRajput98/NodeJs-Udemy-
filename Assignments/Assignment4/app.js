const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const rootPath = require("./utils/rootPath.js");
const mainRoutes = require("./routes/main.js");
const adminRoutes = require("./routes/admin.js");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootPath, "public")));

app.use("/admin", adminRoutes.routes);

app.use(mainRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not found", path: "" });
});
app.listen(3000);
