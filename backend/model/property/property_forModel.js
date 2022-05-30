import mongoose from "mongoose";

const property_forSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Property_for = mongoose.model("Tag", property_forSchema);
export default Property_for;
