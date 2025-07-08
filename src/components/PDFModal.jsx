import React from 'react';

const PDFModal = ({ link, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="w-11/12 h-5/6 bg-white rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={onClose}
        >
          Close ✖
        </button>
        <iframe
          src={link}
          className="w-full h-full rounded-b"
          title="Citation PDF"
        />
      </div>
    </div>
  );
};

export default PDFModal;
