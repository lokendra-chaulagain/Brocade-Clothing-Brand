import Category from "../models/Category.js";
import createError from "../utils/error.js";

const createCategory = async (req, res, next) => {
  try {
    const newService = new Category(req.body);
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
