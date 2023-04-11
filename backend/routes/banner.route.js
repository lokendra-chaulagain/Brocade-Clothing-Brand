import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createBanner, deleteBanner, getAllBanner, getBannerById, updateBanner } from "../controllers/banner.controller.js";
import banner from "../validation/banner.validation.js";
import validate from "../validation/validationMiddleware.js";
import multer from "multer";

// Configure Multer for file uploads
const upload = multer({ dest: "brocade-uploads/banners/" });

router.post("/", upload.array("images"), createBanner);
router.put("/:id", uploadFile("thumbnail"), updateBanner);
router.get("/:id", getBannerById);
router.get("/", getAllBanner);
router.delete("/:id", deleteBanner);

export default router;
