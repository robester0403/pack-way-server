// const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const tripRoutes = require("./routes/trip-routes");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use("/api/trip", tripRoutes);

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, (err) => {
//       console.log(err);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || "An unknown error occurred!" });
// });

require("dotenv").config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(5000);
    console.log(`Connected to Port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
