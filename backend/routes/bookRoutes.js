import express from "express";
import { displayAll, bookRoom, getEmail } from "../controller/bookController.js";
const router = express.Router();

router.get("/", displayAll);
router.get("/:email" , getEmail);
router.post("/", bookRoom);

export default router;
