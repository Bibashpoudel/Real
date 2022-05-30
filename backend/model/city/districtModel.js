import mongoose from "mongoose";

const districtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    state_id: { type: mongoose.Schema.Types.ObjectID, ref: "State" },
  },
  { timestamps: true }
);
const District = mongoose.model("District", districtSchema);
export default District;
