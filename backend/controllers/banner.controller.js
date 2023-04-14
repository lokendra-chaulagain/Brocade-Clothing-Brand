import Banner from "../models/Banner.js";
import createError from "../utils/error.js";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with  credentials
cloudinary.config({
  cloud_name: "dyof6o0ul",
  api_key: "943579715357941",
  api_secret: "fFY3ZIIZAsSKF5lJw9CDVYHmpLQ",
});

const createBanner = async (req, res, next) => {
  try {
    const images = [];
    const files = req.files;

    // Upload each file to Cloudinary and get the URL
    for (const file of files) {
      // const result = await cloudinary.uploader.upload(file.path, { folder: "brocade-uploads/banners" });

      const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
      const publicId = `brocade-uploads/banners/${currentDateTime}_${file.originalname}`; // Create unique public_id
      const result = await cloudinary.uploader.upload(file.path, { public_id: publicId });
      // images.push(result.secure_url);
      images.push(result.secure_url);
    }

    // save to database
    const newService = new Banner({ title: req.body.title, description: req.body.description, images: images });
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

// const deleteBanner = async (req, res, next) => {
//   try {
//     const deletedService = await Banner.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedService);
//   } catch (error) {
//     return next(createError(500, "Something went wrong"));
//   }
// };

const deleteBanner = async (req, res, next) => {
  try {
    const bannerId = req.params.id;
    // Find the banner document in MongoDB
    const banner = await Banner.findById(bannerId);
    if (!banner) {
      return next(createError(404, "Banner not found"));
    }

    console.log(banner.images)

    // Delete the images from Cloudinary
    // for (const eachUrl of banner.images) {
    //   const publicId = eachUrl.split("/").slice(-1)[0].split(".")[0];
    //   // Delete the image from Cloudinary
    //   await cloudinary.uploader.destroy("tuapnvztwug4ywtjbwdx");
    //   // console.log(publicId)
    // }
    
    // Delete the banner document from MongoDB
    await Banner.findByIdAndDelete(bannerId);
    res.status(200).json({ message: "Banner deleted successfully" });
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
