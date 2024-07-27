const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  S: {
    type: Number,
    required: true,
  },
  M: {
    type: Number,
    required: true,
  },
  L: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  order: {
    type: sizeSchema,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
