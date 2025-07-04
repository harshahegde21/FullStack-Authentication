import e from "express";
import UsersData from "../models/authmodel.js";
import { generateToken,verifyToken } from "../middlewares/authmid.js";
const renderSignupForm = (req, res) => {};
const renderLoginForm = (req, res) => {};
const handleSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.status(500).json({ status: "error" });
    } else {
      console.log("Values Recieved ", username);

      const result = await UsersData.create({
        username,
        email,
        password,
      });
      if (result) {
        console.log("User Created Successfully");
        return res.status(201).json({ status: "success" });
      } else {
        console.log("Error in user creation");
        return res.status(500).json({ status: "Error" });
      }
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({ status: "error" });
  }
};
const handleLogin = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UsersData.findOne({ username });

  try {
    if (!user) {
      return res.redirect("/signup");
    }
    else {
        const token = generateToken(user);
        console.log("User logged in successfully");
        res.cookie(token,"authtoken");
        return res.json({ status: "success" })
    }
  } catch (error) {
    return res.status(500).redirect("/login");
  }
};

const handleLogout = (req, res) => {
  res.clearCookie("authtoken")
  console.log("Logged out successfully");
  
  return res.json({status:"success"})
};

export { renderLoginForm, renderSignupForm, handleSignup, handleLogin,handleLogout };
