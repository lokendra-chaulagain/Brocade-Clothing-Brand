import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);
