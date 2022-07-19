const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  tripName: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  categories: { type: String, required: true },
});

tripSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Trip", tripSchema);
