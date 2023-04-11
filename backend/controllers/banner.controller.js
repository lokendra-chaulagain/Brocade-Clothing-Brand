import Banner from "../models/Banner.js";
import createError from "../utils/error.js";

const createBanner = async (req, res, next) => {
  try {
    const newService = new Banner(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const updateBanner = async (req, res, next) => {
  try {
    const updatedService = await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const deletedService = await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const getBannerById = async (req, res, next) => {
  try {
    const singleService = await Banner.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

const getAllBanner = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";

  const query = {
    title: { $regex: search, $options: "i" },
  };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = (page - 1) * size;

    const totalBannerCount = await Banner.countDocuments();
    const allBanner = await Banner.find(query)
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    res.status(200).json({
      totalBannerCount,
      allBanner,
    });
  } catch (error) {
    return next(createError(500, "Something went wrong"));
  }
};

export { createBanner, updateBanner, deleteBanner, getBannerById, getAllBanner };
