"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { fetchContactUsData } from "@/lib/api/cms";
import { submitContactForm } from "@/lib/api/order";
import FormResultDialog from "@/components/FormResultDialog";
import en from "@/../public/locales/en/contact.json";
import ar from "@/../public/locales/ar/contact.json";
import Image from "next/image";

const ContactSection = ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  const [contactData, setContactData] = useState({
    title: "تواصل معنا",
    subTitle: "نحن نحب الاستماع اليك، راسلنا الان:",
    fieldName: "الإسم ...",
    fieldPhone: "رقم الهاتف...",
    fieldEmail: "البريد الالكتروني...",
    fieldMessage: "نص الرسالة...",
  });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    type: "success", // 'success' or 'error'
    title: "",
    message: "",
  });

  useEffect(() => {
    const loadContactData = async () => {
      try {
        const data = await fetchContactUsData();
        setContactData(data);
      } catch (error) {
        console.error("Error loading contact data:", error);
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    loadContactData();
  }, []);

  // Validation functions
  const validateName = (fullName) => {
    if (!fullName.trim()) return t.validation.nameRequired;
    if (fullName.trim().length < 2) return t.validation.nameMin;
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return t.validation.phoneRequired;
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(phone.trim())) return t.validation.phoneInvalid;
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return t.validation.emailRequired;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return t.validation.email;
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return t.validation.messageRequired;
    if (message.trim().length < 10) return t.validation.messageMin;
    return "";
  };

  const validateForm = () => {
    const newErrors = {};

    newErrors.fullName = validateName(formData.fullName);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.email = validateEmail(formData.email);
    newErrors.message = validateMessage(formData.message);

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit the form data to the API
      await submitContactForm(formData);

      // Reset form after successful submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});

      // Show success dialog
      setDialogState({
        isOpen: true,
        type: "success",
        title: t.successTitle || "تم إرسال الرسالة بنجاح!",
        message: t.successMessage || "شكراً لك! سنتواصل معك قريباً.",
      });
    } catch (error) {
      setDialogState({
        isOpen: true,
        type: "error",
        title: t.errorTitle || "حدث خطأ",
        message:
          t.errorMessage || "حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDialogClose = () => {
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="contactUs" className="py-8 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right Side - Title */}
          <div className="text-start">
            <p className="text-[#5A6E51] text-2xl font-bold mb-4">
              {contactData.title}
            </p>
            <h2 className="text-5xl md:text-[80px] font-medium text-[#9C3C28] leading-[100px] tracking-[2%]">
              {contactData.subTitle}
            </h2>
          </div>

          {/* Left Side - Form */}
          <div className="bg-white p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={contactData.fieldName}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full text-start bg-transparent border-0 border-b rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none transition-all duration-300 ${
                    errors.fullName
                      ? "border-b-red-500 focus:border-b-red-500"
                      : "border-b-gray-300 focus:border-b-[#8B4513]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 text-start">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder={contactData.fieldPhone}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full text-start bg-transparent border-0 border-b rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none transition-all duration-300 ${
                    errors.phone
                      ? "border-b-red-500 focus:border-b-red-500"
                      : "border-b-gray-300 focus:border-b-[#8B4513]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 text-start">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contactData.fieldEmail}
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full text-start bg-transparent border-0 border-b rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none transition-all duration-300 ${
                    errors.email
                      ? "border-b-red-500 focus:border-b-red-500"
                      : "border-b-gray-300 focus:border-b-[#8B4513]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-start">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder={contactData.fieldMessage}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full text-start bg-transparent border-0 border-b rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-b-red-500 focus:border-b-red-500"
                      : "border-b-gray-300 focus:border-b-[#8B4513]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 text-start">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="md:pt-8 flex max-sm:justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer rounded-full w-16 h-16 p-0 flex items-center justify-center transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#5F361F] hover:bg-primary-800 hover:scale-105"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Image
                      src="/icons/arrow-left.svg"
                      alt="arrow-left"
                      width={30}
                      height={30}
                    />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Form Result Dialog */}
      <FormResultDialog
        isOpen={dialogState.isOpen}
        onClose={handleDialogClose}
        type={dialogState.type}
        title={dialogState.title}
        message={dialogState.message}
        redirectPath={null}
        successButtonText={t.close || "إغلاق"}
        errorButtonText={t.tryAgain || "حاول مرة أخرى"}
      />
    </section>
  );
};

export default ContactSection;
