"use client";
import { useModal } from "@/lib/ModalContext";
import { X } from "lucide-react";

export default function GlobalModal() {
  const { isModalOpen, modalContent, modalMetadata, closeModal } = useModal();

  if (!isModalOpen || !modalContent) return null;

  // Check if this is a video modal using metadata
  const isVideoModal = modalMetadata?.type === "video";

  return (
    <>
      {/* Global Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/50"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        onClick={closeModal}
      />

      {/* Global Modal Content */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        onClick={closeModal}
      >
        {isVideoModal ? (
          // Video Modal - Full screen style
          <div
            className="relative w-full h-full max-w-7xl max-h-[95vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button for Video */}
            <button
              onClick={closeModal}
              aria-label="إغلاق"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer bg-[#CB974F] hover:bg-[#cb974fa2] text-white rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-900 z-10"
            >
              <X size={20} />
            </button>

            {/* Video Content - Fill entire container */}
            <div className="w-full h-full flex items-center justify-center">
              {modalContent}
            </div>
          </div>
        ) : (
          // Regular Modal - Standard style
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md md:w-full p-6 pt-16 text-center flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="إغلاق"
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center cursor-pointer bg-[#CB974F] hover:bg-[#cb974fa2] text-white rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-900"
            >
              <X size={20} />
            </button>

            {/* Custom Content */}
            <div className="w-full">{modalContent}</div>
          </div>
        )}
      </div>
    </>
  );
}
