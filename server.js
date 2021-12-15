//importing dependencies
const path = require("path");
const express = require("express");
const htmlRoutes = require("htmlRoutes.js");

//server
const app = express();

//port listener
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("./public", express.static("./"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", htmlRoutes);

// app.get("");

require("htmlRoutes.js")(app);
// require("routes")(app);

app.listen(PORT, function () {
  console.log("app running on port" + PORT);
});
