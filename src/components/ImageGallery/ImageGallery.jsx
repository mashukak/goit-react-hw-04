import ImageCard from '../ImageGallery/ImageCard';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
  console.log("Received images in ImageGallery:", images);

  if (!Array.isArray(images)) {
    console.error("Error: images is not an array:", images);
    return <p>Loading or error occurred...</p>;
  }

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
