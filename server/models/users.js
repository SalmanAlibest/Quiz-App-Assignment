import mongoose from "mongoose";
const usersSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const UsersSchema = mongoose.model("UsersSchema", usersSchema);
export default UsersSchema;
