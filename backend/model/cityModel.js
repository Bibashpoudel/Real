import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    district: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "District",
    },
  },
  { timestamps: true }
);
const City = mongoose.model("City", citySchema);
export default City;
