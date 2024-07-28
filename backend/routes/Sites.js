const express = require("express");
const router = express.Router();
const Site = require("../models/sites.model"); // Adjust the path as necessary

// Route to get a thing by ID
router.post("/route", async (req, res) => {
  try {
    const result = await Site.findOne({name: req.body.name});

    if (!result) {
      return res.status(404).json({ msg: "Thing not found" });
    }
    res.json(result);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "Invalid ID" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
