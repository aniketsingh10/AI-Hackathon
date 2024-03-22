// Modal.js

import React from "react";

const InfoModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md relative">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 cursor-pointer font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default InfoModal;
