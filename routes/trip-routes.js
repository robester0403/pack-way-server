const express = require("express");
const tripsController = require("../controllers/trips-controllers");

const router = express.Router();

router.post("/createTrip", tripsController.createTrip);

module.exports = router;
