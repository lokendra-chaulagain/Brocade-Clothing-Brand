import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    slug: {
      type: String,
    },

    images: {
      type: [String],
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
    },

    sizes: {
      type: [String],
    },

    colors: {
      type: [String],
    },

    material: {
      type: [String],
    },

    sku: {
      type: Number,
    },

    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String },
        rating: { type: Number },
        timestamp: { type: Date, default: Date.now },
      },
    ],

    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

    discounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discount" }],

    categoryId: {
      ref: "category",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
