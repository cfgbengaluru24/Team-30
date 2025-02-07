const express = require("express");
const router = express.Router();
const Site = require("../models/sites.model"); // Adjust the path as necessary

// Route to get a thing by ID
router.get("/untapped-area/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const latestSite = await Site.findOne({name})
    if (!latestSite) {
      return res.status(404).send({ message: "No entries found" });
    }
    res.json(latestSite.untapped_area[0]);
  } catch (error) {
    res.status(500).send({ message: "Server error", error });
  }
});

module.exports = router;
