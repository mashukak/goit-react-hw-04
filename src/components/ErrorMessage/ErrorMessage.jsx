import styles from './ImageGallery.module.css';

export default function ErrorMessage({ message }) {
  return <p className={styles.error}>{message}</p>;
}
