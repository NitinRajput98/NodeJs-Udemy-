const express = require("express");

const path = require("path");

const rootPath = require("./utils/path");

const mainRoute = require("./routes/main");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.static(path.join(rootPath, "public")));

app.use(usersRoute);
app.use(mainRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(3000);
