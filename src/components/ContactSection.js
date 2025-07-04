"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right Side - Title */}
          <div className="text-right">
            <p className="text-[#8B4513] text-lg mb-4">تواصل معنا</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#8B4513] leading-tight">
              نحن نحب
              <br />
              الاستماع اليك،
              <br />
              راسلنا الان:
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
                  placeholder="محمد مصطفى علي"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-right bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                  dir="rtl"
                />
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="رقم الهاتف..."
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full text-right bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                  dir="rtl"
                />
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="البريد الالكتروني..."
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-right bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300"
                  dir="rtl"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="نص الرسالة..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full text-right bg-transparent border-0 border-b border-gray-300 rounded-none px-0 py-4 text-lg placeholder:text-gray-400 outline-none focus:border-b-2 focus:border-b-[#8B4513] transition-all duration-300 resize-none"
                  dir="rtl"
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
