import mongoose from "mongoose";

const typesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Types = mongoose.model("Type", typesSchema);

export default Types;
