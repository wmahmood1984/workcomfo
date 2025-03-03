import React from "react";
import { motion } from "framer-motion";
import "./Modal.css"; // Import the CSS file

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="modal-content"
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="modal-body">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
