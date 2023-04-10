import { Router } from "express";
const router = Router();
import { createColor, deleteColor, getAllColor, getColorById, updateColor } from "../controllers/color.controller.js";
// const validation = require('./validation')
import color from "../validation/color.validation.js";
import validate from "../validation/validationMiddleware.js";

router.post("/", validate(color), createColor);
router.put("/:id", updateColor);
router.get("/:id", getColorById);
router.get("/", getAllColor);
router.delete("/:id", deleteColor);

export default router;
