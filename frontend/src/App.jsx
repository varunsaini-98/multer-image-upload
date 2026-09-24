import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageForm from "./components/ImageForm.jsx";
import ImagePreview from "./components/ImagePreview.jsx";
import ImageGallery from "./components/ImageGallery.jsx";
import styles from "./App.module.css";

const API_BASE_URL = "http://localhost:5000";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  // Fetch all images using Axios
  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/images`);
      setImages(res.data); // Returns array of objects with { _id, name, path }
    } catch (err) {
      console.error("Failed to fetch images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Submit file using Axios and FormData
  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Select an image file first!");

    const formData = new FormData();
    formData.append("image", selectedFile); // Must match upload.single('image')

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/images/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert(res.data.message);
      setSelectedFile(null); // Clear preview and selection
      fetchImages(); // Refresh image gallery
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed!");
    }
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appTitle}>MERN Image Upload with Multer</h2>

      <ImageForm
        selectedFile={selectedFile}
        onSelectFile={setSelectedFile}
        onSubmit={handleUploadSubmit}
      />

      <ImagePreview file={selectedFile} />

      <hr className={styles.appDivider} />

      <ImageGallery images={images} baseUrl={API_BASE_URL} />
    </div>
  );
}

export default App;
