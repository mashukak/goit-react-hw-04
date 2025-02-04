import Modal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ image, onClose }) {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} ariaHideApp={false} className={styles.modal}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onClose}>Закрити</button>
      </div>
    </Modal>
  );
}
