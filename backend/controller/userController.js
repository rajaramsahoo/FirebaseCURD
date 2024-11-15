import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
//craete a user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 15);

    const userinfo = { name, email, password:hashedPassword };

    const user = await userModel.create(userinfo);
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
//login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: `${email} Was Not Found ` });
    }
    let matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }
    // const token = generateToken({ user });
    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });  }
};
//get all user
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
