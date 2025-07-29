"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [modalMetadata, setModalMetadata] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content, metadata = {}) => {
    setModalContent(content);
    setModalMetadata(metadata);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalMetadata(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        modalContent,
        modalMetadata,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
