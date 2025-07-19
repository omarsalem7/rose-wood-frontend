"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { fetchContactUsData } from "@/lib/cms";

const ContactSection = () => {
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
    name: "",
    phone: "",
    email: "",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-8 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right Side - Title */}
          <div className="text-start">
            <p className="text-[#8B4513] text-lg mb-4">{contactData.title}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#8B4513] leading-tight">
              {contactData.subTitle}
            </h2>
          </div>

          {/* Left Side - Form */}
          <div className="bg-white p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={contactData.fieldName}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-start bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                />
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={contactData.fieldPhone}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full text-start bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                />
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contactData.fieldEmail}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-start bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder={contactData.fieldMessage}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full text-start bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300 resize-none"
                />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  className="bg-[#8B4513] hover:bg-[#654321] text-white rounded-full w-16 h-16 p-0 flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
