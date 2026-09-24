import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Establish connection to MongoDB instance
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
