import Color from "../models/Color.js";
import Category from "../models/Category.js";
import Size from "../models/Size.js";
import createError from "../utils/error.js";
import Product from "../models/Product.js";
import Banner from "../models/Banner.js";
import Subscriber from "../models/Subscriber.js";
import Contact from "../models/Contact.js";
import User from "../models/User.js";

const getAll = async (req, res, next) => {
  try {
    const colors = await Color.find();
    const sizes = await Size.find();
    const categories = await Category.find();
    res.status(200).json({ colors, sizes, categories });
  } catch (error) {
    return next(createError(500, "Server Error while getting all color size category !"));
  }
};

const getAllCountData = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments();
    const bannerCount = await Banner.countDocuments();
    const subscriberCount = await Subscriber.countDocuments();
    const mailCount = await Contact.countDocuments();
    const categoryCount = await Category.countDocuments();
    const colorCount = await Color.countDocuments();
    const sizeCount = await Size.countDocuments();
    const userCount = await User.countDocuments();
    res.status(200).json({ productCount, bannerCount, bannerCount, subscriberCount, colorCount, sizeCount, userCount, mailCount, categoryCount });
  } catch (error) {
    return next(createError(500, "Server Error while getting all EventBanner !"));
  }
};

export { getAll, getAllCountData };
