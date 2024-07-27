const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const SiteRoutes = require("./routes/Sites");
const OrderRoutes = require("./routes/Order");
const DonorRoutes = require("./routes/Donation");
const AuthRouter = require("./routes/auth");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Check mongoose connection to db
const connectionString = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);
app.use("/api/site", SiteRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/donor", DonorRoutes);

const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
// Start the server only after connecting to the database
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
