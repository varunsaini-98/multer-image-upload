import React from "react";
import styles from "./ImageForm.module.css";

const ImageForm = ({ onSelectFile, onSubmit, selectedFile }) => {
  return (
    <form className={styles.imageForm} onSubmit={onSubmit}>
      <input
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={(e) => onSelectFile(e.target.files[0])}
      />
      <button
        type="submit"
        className={styles.uploadBtn}
        disabled={!selectedFile}
      >
        Upload Image
      </button>
    </form>
  );
};

export default ImageForm;
