import React from 'react';
import './ImageModal.css';

function ImageModal({ src, alt, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={src} alt={alt} className="modal-image" />
            </div>
        </div>
    );
}

export default ImageModal;