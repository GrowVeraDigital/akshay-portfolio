"use client";

import { useEffect, useState, useCallback } from "react";

export default function VideoModal({ videoId, onClose }) {
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
      className={`video-modal${isOpen ? " open" : ""}`}
      onClick={handleBackdropClick}
    >
      <button
        className="video-modal-close"
        aria-label="Close"
        onClick={handleClose}
      >
        ×
      </button>
      <div className="video-modal-inner">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
