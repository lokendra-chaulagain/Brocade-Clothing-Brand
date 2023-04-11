import { Router } from "express";
const router = Router();
import { createSubscriber, deleteSubscriber, getAllSubscriber } from "../controllers/subscriber.controller.js";
import subscriber from "../validation/subscriber.validation.js";
import validate from "../validation/validationMiddleware.js";

router.post("/", validate(subscriber), createSubscriber);
router.get("/", getAllSubscriber);
router.delete("/:id", deleteSubscriber);

export default router;
