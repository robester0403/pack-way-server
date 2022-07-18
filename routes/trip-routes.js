const express = require("express");
const { check } = require("express-validator");
const tripsController = require("../controllers/trips-controllers");

const router = express.Router();

// router.get('/', usersController.getUsers);
router.post("/", tripsController.testEndpoint);
router.post("/createTrip", tripsController.createTrip);

module.exports = router;
