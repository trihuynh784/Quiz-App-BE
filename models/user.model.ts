import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  token: String,
});

const User = mongoose.model("User", userSchema, "users");

export default User;
