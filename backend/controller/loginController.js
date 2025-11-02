import login from "../model/loginModel.js";
import bcrypt from "bcryptjs";
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(200)
        .json({ message: "Enter all details", color: "red", status: "false" });
    }

    const user = await login.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res
        .status(200)
        .json({ message: "User doesn't exist", color: "red", status: "false" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.cookie("name", "shaina");
      console.log("cookie name: " , req.cookies);
      
      return res.status(200).json({
        message: "Login successful",
        color: "green",
        user,
        status: true,
      });
    }
    return res
      .status(401)
      .json({ message: "Invalid password", color: "red", status: false });
  } catch (error) {
    console.log("Error in loginUser Backend:", error.message);
    return res.status(500).json({ message: "Server error", color: "red" });
  }
};
