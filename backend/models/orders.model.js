const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pelletPlant: {
    type: Number,
    required: true,
    default: 0,
  },
  elephants: {
    type: Number,
    required: true,
    default: 0,
  },
  chair: {
    type: Number,
    required: true,
    default: 0,
  },
  tables: {
    type: Number,
    required: true,
    default: 0,
  },
  basket: {
    type: Number,
    required: true,
    default: 0,
  },
  sofaSets: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
