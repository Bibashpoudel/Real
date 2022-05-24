import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Tag = mongoose.model("Tag", tagSchema);
export default Tag;
