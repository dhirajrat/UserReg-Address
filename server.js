const express = require("express");

// const dotenv =
require("dotenv").config();

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Conneting To the Database
const connection = require("./config/database.config");

connection.database();

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to application User Registration.",
  });
});

// Require user routes
require("./app/routes/user")(app);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;
