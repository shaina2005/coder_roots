import login from "../model/loginModel.js";
import bcrypt from "bcryptjs";
export const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", color: "red" });
    }

    const exists = await login.findOne({ email });
    if (exists) {
      return res
        .status(200)
        .json({ message: "User already exists", color: "red" });
    }
    const salt = await bcrypt.genSalt(10);
    const secpass = bcrypt.hashSync(password, salt);
    await login.create({ name, email: email.toLowerCase(), password: secpass });
    return res
      .status(201)
      .json({ message: "User created successfully", color: "green" });
  } catch (error) {
    console.log("Error in addUser backend:", error.message);
    return res.status(500).json({ message: "Server error", color: "red" });
  }
};
