//importing dependencies
const path = require("path");
const express = require("express");

//server
const app = express();

//port listener
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("./public", express.static("./"));

app.get("");

require("routes/")(app);
require("routes")(app);

app.listen(PORT, function () {
  console.log("app running on port" + PORT);
});
