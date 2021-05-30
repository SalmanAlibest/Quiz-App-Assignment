import mongoose from "mongoose";
const loginSchema = mongoose.Schema({
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const Login = mongoose.model("Login", loginSchema);
export default Login;
