const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1/abc")
  .then(() => {
    console.log("Successfully Connected.");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000);
