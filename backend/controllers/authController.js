const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/volunteer_reg.model");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await UserModel.findOne({ email });
    const errorMsg = "Auth failed email or password is wrong";
    // console.log(user);
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    // console.log("hello", user.password);
    const isPassEqual = await bcrypt.compare(password, user.password);
    console.log(isPassEqual);
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log("hello");

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server errror",
      success: false,
    });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    // console.log(name, email, password, phone);
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exist, you can login",
        success: false,
      });
    }
    const userModel = new UserModel({ name, email, password, phone });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({
      message: "Signup successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server errror",
      success: false,
    });
  }
};

module.exports = {
  login,
  signup,
};
