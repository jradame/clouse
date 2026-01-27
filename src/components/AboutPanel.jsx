import { useEffect, useState } from "react";

function AboutPanel({ isOpen, onClose }) {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (isOpen) setAnimateOut(false);
  }, [isOpen]);

  if (!isOpen && !animateOut) return null;

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      onClose();
    }, 220);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div className="slide-card-backdrop" onClick={handleBackdropClick}>
      <div
        className={
          "slide-card " + (animateOut ? "slide-card-out" : "slide-card-in")
        }
      >
        <button
          type="button"
          className="slide-card-close"
          onClick={handleClose}
          aria-label="Close about panel"
        >
          ×
        </button>

        <div className="slide-content">
          <h2>About</h2>
          <p>
            Clouse Photography focuses on hospitality, travel, and commissioned
            work with a clean, editorial visual style. Based in Austin and
            available for projects worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPanel;
