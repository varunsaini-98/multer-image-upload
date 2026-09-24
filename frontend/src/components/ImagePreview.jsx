import React from "react";
import styles from "./ImagePreview.module.css";

const ImagePreview = ({ file }) => {
  if (!file) return null;

  return (
    <div className={styles.previewContainer}>
      <h4 className={styles.previewTitle}>Selected Image Preview:</h4>
      <img
        src={URL.createObjectURL(file)}
        alt="Preview"
        className={styles.previewImage}
      />
    </div>
  );
};

export default ImagePreview;
