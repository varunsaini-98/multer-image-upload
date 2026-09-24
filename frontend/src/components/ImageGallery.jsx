import React from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, baseUrl }) => {
  if (!images || images.length === 0) {
    return <p className={styles.emptyGallery}>No images uploaded yet.</p>;
  }

  return (
    <div>
      <h3 className={styles.galleryTitle}>Uploaded Gallery</h3>
      <div className={styles.galleryGrid}>
        {images.map((img) => (
          <div key={img._id} className={styles.galleryCard}>
            <img
              src={`${baseUrl}/uploads/${img.path}`}
              alt={img.name}
              className={styles.galleryImage}
            />
            <p className={styles.galleryImageName}>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
