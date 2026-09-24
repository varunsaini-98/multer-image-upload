import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "images_data", // <-- Explicitly sets collection name to images_data
  },
);

const Image = mongoose.model("Image", imageSchema);
export default Image;
