import mongoose from "mongoose";
import UsersSchema from "../models/users.js";
export const login = async (req, res) => {
  const { email, password } = req.body;
  //   return res.status(404).send(`No Question with id: ${id}`);
  const loginData = await UsersSchema.find({
    email: email,
    password: password,
  }).exec();
  console.log("Login Controller", loginData);
  res.json(loginData);
};
