"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FormResultDialog = ({
  isOpen,
  onClose,
  type, // 'success' or 'error'
  title,
  message,
  redirectPath = "/",
  successButtonText = "Go to Home",
  errorButtonText = "Try Again",
}) => {
  const router = useRouter();

  const handleSuccessAction = () => {
    onClose();
    if (redirectPath) {
      router.push(redirectPath);
    }
  };

  const handleErrorAction = () => {
    onClose();
  };

  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle : XCircle;
  const iconColor = isSuccess ? "text-[#8B4513]" : "text-red-600";
  const buttonColor = isSuccess
    ? "bg-gradient-to-b from-[#8B4513] to-[#654321] hover:from-[#654321] hover:to-[#8B4513]"
    : "bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-600";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md bg-white border-0 shadow-2xl"
        style={{ fontFamily: '"Alexandria", sans-serif' }}
      >
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-6">
            <div className={`relative p-4 rounded-full bg-gray-100`}>
              <Icon className={`h-12 w-12 ${iconColor}`} />
              {/* Decorative dots around the icon */}
              <div className="absolute inset-0 rounded-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${
                      isSuccess ? "bg-[#8B4513]/20" : "bg-red-200"
                    }`}
                    style={{
                      top: `${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      left: `${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogTitle
            className="text-xl text-center font-bold text-gray-800 mb-3"
            style={{ fontFamily: '"Alexandria", sans-serif' }}
          >
            {title}
          </DialogTitle>
          <DialogDescription
            className="text-base text-center text-gray-600 leading-relaxed"
            style={{ fontFamily: '"Alexandria", sans-serif' }}
          >
            {message}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-8">
          <Button
            onClick={isSuccess ? handleSuccessAction : handleErrorAction}
            className={`${buttonColor} text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-[140px] cursor-pointer`}
            style={{ fontFamily: '"Alexandria", sans-serif' }}
          >
            {isSuccess ? successButtonText : errorButtonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormResultDialog;
