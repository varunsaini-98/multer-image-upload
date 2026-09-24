import express from "express";
import { uploadImage, getImages } from "../controllers/imageController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Route endpoints under /api/images
router.post("/upload", upload.single("image"), uploadImage);
router.get("/", getImages);

export default router;
