import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ image, isOpen, onClose }) {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} className={styles.modal}>
      <img src={image.urls?.regular} alt={image.alt_description || 'Image'} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
