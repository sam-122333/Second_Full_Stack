// importing modules and packages
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

//set up express
const app = express();

//setup config path
dotenv.config({ path: "./config.env" });

// connect to database
require("./DB/mongodb");

const PORT = process.env.PORT || 4000;

app.listen(PORT, "localhost", () => {
  console.log(`server listen on port 4000`);
});
