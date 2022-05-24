import mongoose from "mongoose";
const otpSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    verification: {
      type: Boolean,
    },
    expire_time: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const OTP = mongoose.model("Otp", otpSchema);

export default OTP;
