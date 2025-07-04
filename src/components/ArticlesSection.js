"use client";
import React, { useState } from "react";
import {
  Calendar,
  MessageCircle,
  Eye,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ArticlesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;

  const allArticles = [
    {
      id: 1,
      image: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      title: "عنوان نص الموضوع يكون في هذا المكان",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "5/5/2023",
      comments: 320,
      views: 6842,
    },
    {
      id: 2,
      image: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      title: "مقال عن أحدث التطورات في الصناعة",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "3/5/2023",
      comments: 185,
      views: 4521,
    },
    {
      id: 3,
      image: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      title: "دليل شامل للمبتدئين في المجال",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "1/5/2023",
      comments: 92,
      views: 2847,
    },
    {
      id: 4,
      image: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      title: "نصائح وحيل مفيدة للمحترفين",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "28/4/2023",
      comments: 256,
      views: 5673,
    },
    {
      id: 5,
      image: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      title: "استراتيجيات النجاح في العمل",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "25/4/2023",
      comments: 147,
      views: 3924,
    },
    {
      id: 6,
      image: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      title: "تحليل السوق والاتجاهات الحديثة",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "20/4/2023",
      comments: 78,
      views: 2156,
    },
    {
      id: 7,
      image: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      title: "أفضل الممارسات في الصناعة",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "18/4/2023",
      comments: 203,
      views: 4785,
    },
    {
      id: 8,
      image: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      title: "كيفية تطوير المهارات المهنية",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "15/4/2023",
      comments: 134,
      views: 3267,
    },
    {
      id: 9,
      image: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      title: "مستقبل التكنولوجيا والابتكار",
      excerpt:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى... إقرأ المزيد",
      date: "12/4/2023",
      comments: 89,
      views: 2943,
    },
  ];

  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const currentArticles = allArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const canGoLeft = currentPage > 0;
  const canGoRight = currentPage < totalPages - 1;

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#8B5A3C" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-alexandria"
            style={{ direction: "rtl" }}
          >
            المقالات
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Article Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                {/* Article Title */}
                <h3
                  className="text-xl font-bold text-gray-800 mb-4 font-alexandria leading-relaxed"
                  style={{ direction: "rtl" }}
                >
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-6 font-alexandria"
                  style={{ direction: "rtl" }}
                >
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div
                    className="flex items-center space-x-4"
                    style={{ direction: "rtl" }}
                  >
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="font-alexandria">{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={16} />
                      <span>{article.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section with Button and Navigation */}
        <div className="flex items-center justify-between">
          {/* View All Button */}
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#8B5A3C] transition-all duration-300 font-alexandria">
            عرض كل الأخبار
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4">
            <button
              onClick={goToPrevious}
              disabled={!canGoLeft}
              className={`w-12 h-12 bg-[#ffffff6b] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                canGoLeft
                  ? "hover:bg-opacity-30 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoRight}
              className={`w-12 h-12 bg-[#ffffff6b] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                canGoRight
                  ? "hover:bg-opacity-30 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
