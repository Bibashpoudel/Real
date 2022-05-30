import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    state_id: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "State",
    },
    district_id: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "District",
    },
  },
  { timestamps: true }
);
const City = mongoose.model("City", citySchema);
export default City;
