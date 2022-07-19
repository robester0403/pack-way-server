const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Trips = require("../models/trips");

const createTrip = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  console.log("we are good");
};

exports.createTrip = createTrip;
