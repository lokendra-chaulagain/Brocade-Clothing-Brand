import { Router } from "express";
const router = Router();
import { createContact, updateContact, deleteContact, getContactById, getAllContact } from "../controllers/contact.controller.js";
import contact from "../validation/contact.validation.js";
import validate from "../validation/validationMiddleware.js";

router.post("/", validate(contact), createContact);
router.put("/:id", updateContact);
router.get("/:id", getContactById);
router.get("/", getAllContact);
router.delete("/:id", deleteContact);

export default router;
