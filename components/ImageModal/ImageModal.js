"use client";

import { useEffect, useState, useCallback } from "react";

export default function ImageModal({ src, title, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => onClose(), 180);
  }, [onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setIsOpen(true));

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`image-modal${isOpen ? " open" : ""}`}
      onClick={handleBackdropClick}
    >
      <button
        className="image-modal-close"
        aria-label="Close"
        onClick={handleClose}
      >
        ×
      </button>
      <div className="image-modal-inner">
        <img src={src} alt="" />
        <p>{title}</p>
      </div>
    </div>
  );
}
