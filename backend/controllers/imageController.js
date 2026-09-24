import Image from "../models/Image.js";

// @desc    Upload single image & save metadata to MongoDB
// @route   POST /api/images/upload
export const uploadImage = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "Please select an image file to upload" });
  }

  try {
    const newImage = new Image({
      name: req.file.originalname,
      path: req.file.filename,
    });
    await newImage.save();

    res.status(201).json({
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server error while uploading image",
        error: error.message,
      });
  }
};

// @desc    Fetch all uploaded image metadata
// @route   GET /api/images
export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server error while fetching images",
        error: error.message,
      });
  }
};
