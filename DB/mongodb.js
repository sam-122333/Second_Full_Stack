const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("saved complete!");
  })
  .catch((err) => {
    console.log("error catch", err);
  });
