import React, { useState,useEffect } from "react";
const emptyFunction =()=>{;}
const Modal = ({ isOpen, onClose=emptyFunction, title, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  
  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative bg-white rounded-lg w-96 p-6">
            <div className="flex justify-between ">
              <h3 className="font-bold">{title}</h3>              
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>   
            <hr className="mb-3"></hr>         
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
