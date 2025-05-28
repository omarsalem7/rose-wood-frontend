
import React from "react";

const WhyChooseRosewoodSection = () => {
  const features = [
    {
      id: 1,
      title: "الالتزام كامل بالجودة في كل قطعة",
      image: "/lovable-uploads/91cdd0f1-bb5d-4353-bb11-ec58a2aa1433.png",
      position: "top-right"
    },
    {
      id: 2,
      title: "خامات طبيعية 100% وآمنة على الطعام",
      image: "/lovable-uploads/85367162-16c2-4a95-8acf-765ebb5ac768.png",
      position: "right"
    },
    {
      id: 3,
      title: "تصميمات عصرية تناسب كل المطابخ",
      image: "/lovable-uploads/90e87b17-13ba-485e-8102-615eb33aeebd.png",
      position: "bottom-right"
    },
    {
      id: 4,
      title: "تصدير عالمي بجودة فائقة وطبيعية",
      image: "/lovable-uploads/e432c118-112a-46c1-a96b-9415ab4c10a0.png",
      position: "bottom-left"
    },
    {
      id: 5,
      title: "حلول مخصصة للمشاريع والمطاعم الكبيرة",
      image: "/lovable-uploads/5845fca4-7450-42e0-8e75-7c1105255af6.png",
      position: "left"
    },
    {
      id: 6,
      title: "دعم فني وخدمة عملاء متميزة دائما",
      image: "/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png",
      position: "top-left"
    }
  ];

  const getFeaturePosition = (position: string) => {
    const radius = 200;
    const centerX = 0;
    const centerY = 0;
    
    switch (position) {
      case "top-right":
        return { x: radius * 0.7, y: -radius * 0.7 };
      case "right":
        return { x: radius, y: 0 };
      case "bottom-right":
        return { x: radius * 0.7, y: radius * 0.7 };
      case "bottom-left":
        return { x: -radius * 0.7, y: radius * 0.7 };
      case "left":
        return { x: -radius, y: 0 };
      case "top-left":
        return { x: -radius * 0.7, y: -radius * 0.7 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const getTextPosition = (position: string) => {
    const textDistance = 120;
    
    switch (position) {
      case "top-right":
        return { x: textDistance, y: -textDistance, align: "right" };
      case "right":
        return { x: textDistance, y: 0, align: "right" };
      case "bottom-right":
        return { x: textDistance, y: textDistance, align: "right" };
      case "bottom-left":
        return { x: -textDistance, y: textDistance, align: "left" };
      case "left":
        return { x: -textDistance, y: 0, align: "left" };
      case "top-left":
        return { x: -textDistance, y: -textDistance, align: "left" };
      default:
        return { x: 0, y: 0, align: "center" };
    }
  };

  return (
    <section className="py-20 px-6 bg-amber-50 font-alexandria">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={{ direction: "rtl" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            لماذا تختار روز وود
          </h2>
        </div>

        {/* Central Circle with Features */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="-300 -300 600 600"
            style={{ overflow: "visible" }}
          >
            {/* Central Logo Circle */}
            <circle
              cx="0"
              cy="0"
              r="80"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
              filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
            />
            
            {/* Feature Circles and Lines */}
            {features.map((feature) => {
              const featurePos = getFeaturePosition(feature.position);
              const textPos = getTextPosition(feature.position);
              
              return (
                <g key={feature.id}>
                  {/* Connecting Line from center to feature circle */}
                  <line
                    x1="0"
                    y1="0"
                    x2={featurePos.x}
                    y2={featurePos.y}
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Line from feature circle to text */}
                  <line
                    x1={featurePos.x}
                    y1={featurePos.y}
                    x2={featurePos.x + textPos.x}
                    y2={featurePos.y + textPos.y}
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />
                  
                  {/* Feature Circle */}
                  <circle
                    cx={featurePos.x}
                    cy={featurePos.y}
                    r="50"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))"
                  />
                  
                  {/* Feature Image */}
                  <image
                    x={featurePos.x - 40}
                    y={featurePos.y - 40}
                    width="80"
                    height="80"
                    href={feature.image}
                    clipPath={`circle(40px at 40px 40px)`}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Logo */}
          <div className="absolute w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <img
              src="/lovable-uploads/0614bf8a-ec39-4aa0-b5aa-f9a5e619060e.png"
              alt="Rosewood Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Feature Text Labels */}
          {features.map((feature) => {
            const featurePos = getFeaturePosition(feature.position);
            const textPos = getTextPosition(feature.position);
            
            return (
              <div
                key={`text-${feature.id}`}
                className="absolute w-48"
                style={{
                  left: `calc(50% + ${featurePos.x + textPos.x}px)`,
                  top: `calc(50% + ${featurePos.y + textPos.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  direction: "rtl"
                }}
              >
                <p className={`text-sm font-medium text-gray-700 ${
                  textPos.align === 'right' ? 'text-right' : 
                  textPos.align === 'left' ? 'text-left' : 'text-center'
                }`}>
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRosewoodSection;
