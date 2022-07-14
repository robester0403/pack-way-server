const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();
const port = process.env.PORT || 3030;
