const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const tripRoutes = require("./routes/trip-routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/trip", tripRoutes);

require("dotenv").config();
const port = process.env.PORT || 5001;

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(5001);
    console.log(`Connected to Port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
