const express = require("express");
const router = express.Router();
const Donation = require("../models/donor.model"); // Adjust the path as necessary

// Route to create a new donation
router.post("/route", async (req, res) => {
  try {
    const { name, amount, email, phone } = req.body;

    // Validate input
    if (!name || !amount || !email || !phone) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Create a new donation
    const newDonation = new Donation({
      name,
      amount,
      email,
      phone,
    });

    const savedDonation = await newDonation.save();
    res.json(savedDonation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
