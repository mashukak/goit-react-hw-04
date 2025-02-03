import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#fff',
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      )}
      <button
        onClick={onClose}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#ff4d4d',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
