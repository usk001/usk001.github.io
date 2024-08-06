import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === 'image-modal') {
      onClose();
    }
  };

  return (
    <div className="image-modal" onClick={handleClickOutside}>
      <div className="image-modal-content">
        <span className="image-modal-close" onClick={onClose}>&times;</span>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ImageModal;
