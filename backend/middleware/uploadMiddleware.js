import multer from "multer";
import path from "path";

// Define disk storage engine for physical file retention
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Saves files into multer-image-upload/backend/uploads/
  },
  filename: (req, file, cb) => {
    // Generate unique filename using current timestamp + original extension
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
export default upload;
