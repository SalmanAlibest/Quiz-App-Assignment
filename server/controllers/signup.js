import mongoose from "mongoose";
import UsersSchema from "../models/users.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const signup = new UsersSchema({
    name,
    email,
    password,
  });
  console.log("Create", signup);
  try {
    await signup.save();
    res.status(201).json(signup);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
