const express = require("express");
const router = express.Router();
const Order = require("../models/orders.model"); // Adjust the path as necessary

// Route to create a new order
router.post("/route", async (req, res) => {
  try {
    const {
      email,
      name,
      phone,
      basket,
      chair,
      tables,
      elephants,
      sofaSets,
      pelletPlant,
    } = req.body;

    // Validate input
    if (
      !email ||
      !name ||
      !phone ||
      !basket ||
      !chair ||
      !tables ||
      !elephants ||
      !sofaSets ||
      !pelletPlant
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Create a new order
    const newOrder = new Order({
      email,
      phone,
      name,
      basket,
      chair,
      tables,
      elephants,
      sofaSets,
      pelletPlant,
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
