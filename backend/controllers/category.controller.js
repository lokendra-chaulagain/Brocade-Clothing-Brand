import Category from "../models/Category.js";
import createError from "../utils/error.js";
import slugify from "slugify";

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with  credentials
cloudinary.config({
  cloud_name: "dyof6o0ul",
  api_key: "943579715357941",
  api_secret: "fFY3ZIIZAsSKF5lJw9CDVYHmpLQ",
});

const createCategory = async (req, res, next) => {
  try {
    const file = req.file;
    const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
    const originalnameWithoutExtension = file.originalname.split(".").slice(0, -1).join("."); // Remove file extension
    const publicId = `brocade-uploads/category/${currentDateTime}_${originalnameWithoutExtension}`; // Create unique public_id without duplicate file extension
    const result = await cloudinary.uploader.upload(file.path, { public_id: publicId });
    const imageUrl = result.secure_url; // Get secure_url from result object

    const slug = slugify(req.body.name, {
      replacement: "-",
      remove: undefined,
      lower: true,
    });

    const newService = new Category({ name: req.body.name, slug: slug, image: imageUrl });
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedService = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedService = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const singleService = await Category.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "SSomething went wrong"));
  }
};

// const getAllCategory = async (req, res, next) => {
//   try {
//     const allService = await Category.find();
//     res.status(200).json(allService);
//   } catch (error) {
//     return next(createError(500, "Server Error while getting all Category !"));
//   }
// };

const getAllCategory = async (req, res, next) => {
  try {
    let allService = [];
    if (req.query.url) {
      allService = await Category.findOne({ url: req.query.url });
    } else {
      allService = await Category.find();
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

export { createCategory, updateCategory, deleteCategory, getCategoryById, getAllCategory };
