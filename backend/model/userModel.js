import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
