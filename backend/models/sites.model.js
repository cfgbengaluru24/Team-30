const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  machines: {
    type: Map,
    of: Number,
    default: {},
  },
  people: {
    type: Number,
  },
  untapped_area: {
    type: Number,
  },
  last_tapping: {
    type: Date,
    required: true,
  },
  next_schedule_date: {
    type: Date,
    required: true,
  },
  cost_input: {
    type: Number,
    required: true,
  },
  output: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
