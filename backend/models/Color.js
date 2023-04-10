import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  color: {
    type: String,
  },
});

export default mongoose.model("Color", colorSchema);
