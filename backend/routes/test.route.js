import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const router = express.Router();

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Configure Cloudinary with your Cloudinary credentials
cloudinary.config({
  cloud_name: "dyof6o0ul",
  api_key: "943579715357941",
  api_secret: "fFY3ZIIZAsSKF5lJw9CDVYHmpLQ",
});

// Define a schema for your MongoDB document
const ImageSchema = new mongoose.Schema({
  urls: [String],
});

// Create a mongoose model for the Image document
const ImageModel = mongoose.model("Image", ImageSchema);

// Define the route for uploading multiple images
router.post("/", upload.array("images"), async (req, res) => {
  try {
    const imageUrls = [];
    const files = req.files;

    // Upload each file to Cloudinary and get the URL
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path);
      imageUrls.push(result.secure_url);
    }

    // Save the image URLs in the MongoDB document
    const image = new ImageModel({ urls: imageUrls });
    await image.save();

    res.status(200).json({ success: true, urls: imageUrls });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
