const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("./public", express.static("./"));

require("routes")(app);
require("routes")(app);

app.listen(PORT, function () {
  console.log("app running on port" + PORT);
});
