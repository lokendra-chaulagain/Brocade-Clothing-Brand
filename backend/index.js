import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import productRoute from "./routes/product.route.js";
import bannerRoute from "./routes/banner.route.js";
import subscriberRoute from "./routes/subscriber.route.js";
import categoryRoute from "./routes/category.route.js";
import colorRoute from "./routes/color.route.js";
import sizeRoute from "./routes/size.route.js";
import getAllRoute from "./routes/miscellaneous.route.js";

import userRoute from "./routes/user.route.js";
import testRoute from "./routes/test.route.js";

import cors from "cors";
import cookieParser from "cookie-parser";
const port = process.env.PORT;

app.use("/gem", express.static("./gem"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/contact", contactRoute);
app.use("/api/product", productRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/subscriber", subscriberRoute);
app.use("/api/category", categoryRoute);
app.use("/api/color", colorRoute);
app.use("/api/size", sizeRoute);
app.use("/api/getAll", getAllRoute);

app.use("/api/user", userRoute);
app.use("/api/test", testRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
