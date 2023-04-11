import { Router } from "express";
const router = Router();
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/category.controller.js";
import { uploadFile } from "../utils/uploadFile.js";
import category from "../validation/category.validation.js";
import validate from "../validation/validationMiddleware.js";

router.post("/", validate(category), createCategory);
router.put("/:id", uploadFile("thumbnail"), updateCategory);
router.get("/:id", getCategoryById);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);

export default router;
