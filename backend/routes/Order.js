const express = require("express");
const router = express.Router();
const Order = require("../models/orders.model"); // Adjust the path as necessary

// Route to create a new order
router.post("/route", async (req, res) => {
  try {
    const { email, phone, order } = req.body;

    // Validate input
    if (!email || !phone || !order || !order.S || !order.M || !order.L) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Create a new order
    const newOrder = new Order({
      email,
      phone,
      order,
    });

    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Order.find({});
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
