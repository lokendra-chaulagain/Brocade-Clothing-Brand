import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createBanner, deleteBanner, getAllBanner, getBannerById, updateBanner } from "../controllers/banner.controller.js";
import banner from "../validation/banner.validation.js";
import validate from "../validation/validationMiddleware.js";

router.post("/", uploadFile("thumbnail"), validate(banner), createBanner);
router.put("/:id", uploadFile("thumbnail"), updateBanner);
router.get("/:id", getBannerById);
router.get("/", getAllBanner);
router.delete("/:id", deleteBanner);

export default router;
