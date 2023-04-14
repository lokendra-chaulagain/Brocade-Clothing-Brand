import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createProduct, deleteProduct, getAllProduct, getAllProductForAdmin, getAllProductFrontend, getProductById, updateProduct } from "../controllers/product.controller.js";
import multer from "multer";


// Configure Multer for file uploads
const upload = multer({ dest: "brocade-uploads/products/" });

router.post("/", upload.array("images"), createProduct);
router.put("/:id", uploadFile("thumbnail"), updateProduct);
router.get("/:id", getProductById);
router.get("/", getAllProduct);
router.get("/forAdmin/", getAllProductForAdmin);
router.get("/frontend/", getAllProductFrontend);
router.delete("/:id", deleteProduct);

export default router;
