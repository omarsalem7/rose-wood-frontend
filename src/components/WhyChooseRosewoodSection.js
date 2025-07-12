import Image from "next/image";

const WhyChooseRosewoodSection = ({ title }) => {
  const features = [
    {
      id: 1,
      title: "الالتزام كامل بالجودة في كل قطعة",
      image: "/assets/whyChoose1.png",
      position: "top-right",
    },
    {
      id: 2,
      title: "خامات طبيعية 100% وآمنة على الطعام",
      image: "/assets/whyChoose2.png",
      position: "right",
    },
    {
      id: 3,
      title: "تصميمات عصرية تناسب كل المطابخ",
      image: "/assets/whyChoose3.png",
      position: "bottom-right",
    },
    {
      id: 4,
      title: "تصدير عالمي بجودة فائقة وطبيعية",
      image: "/assets/whyChoose1.png",
      position: "bottom-left",
    },
    {
      id: 5,
      title: "حلول مخصصة للمشاريع والمطاعم الكبيرة",
      image: "/assets/whyChoose2.png",
      position: "left",
    },
    {
      id: 6,
      title: "دعم فني وخدمة عملاء متميزة دائما",
      image: "/assets/whyChoose3.png",
      position: "top-left",
    },
  ];

  const getFeaturePosition = (position) => {
    const radius = 280;

    switch (position) {
      case "top-right":
        return { x: radius * 0.8, y: -radius * 0.6 };
      case "right":
        return { x: radius, y: 0 };
      case "bottom-right":
        return { x: radius * 0.8, y: radius * 0.6 };
      case "bottom-left":
        return { x: -radius * 0.8, y: radius * 0.6 };
      case "left":
        return { x: -radius, y: 0 };
      case "top-left":
        return { x: -radius * 0.8, y: -radius * 0.6 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const getTextBoxPosition = (position) => {
    const distance = 180;

    switch (position) {
      case "top-right":
        return { x: distance + 100, y: 0, align: "right" };
      case "right":
        return { x: distance + 45, y: 0, align: "right" };
      case "bottom-right":
        return { x: distance + 100, y: 0, align: "right" };
      case "bottom-left":
        return { x: -distance - 100, y: 0, align: "left" };
      case "left":
        return { x: -distance - 45, y: 0, align: "left" };
      case "top-left":
        return { x: -distance - 100, y: 0, align: "left" };
      default:
        return { x: 0, y: 0, align: "center" };
    }
  };

  return (
    <section className="py-20 px-6 max-sm:hidden">
      <h2 className="text-center  font-semibold text-3xl">{title}</h2>
      <div className="max-w-7xl mx-auto">
        {/* Central Circle with Features */}
        <div className="relative flex items-center justify-center min-h-[650px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="-400 -350 800 700"
            style={{ overflow: "visible" }}
          >
            {/* Feature Circles and Lines */}
            {features.map((feature) => {
              const featurePos = getFeaturePosition(feature.position);
              const textPos = getTextBoxPosition(feature.position);

              return (
                <g key={feature.id}>
                  {/* Connecting Line from center to feature circle */}
                  <line
                    x1="0"
                    y1="0"
                    x2={featurePos.x}
                    y2={featurePos.y}
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />

                  {/* Line from feature circle to text box */}
                  <line
                    x1={featurePos.x}
                    y1={featurePos.y}
                    x2={featurePos.x + textPos.x}
                    y2={featurePos.y + textPos.y}
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />

                  {/* Feature Circle */}
                  <circle
                    cx={featurePos.x}
                    cy={featurePos.y}
                    r="50"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
                  />

                  {/* Feature Image */}
                  <foreignObject
                    x={featurePos.x - 40}
                    y={featurePos.y - 40}
                    width="80"
                    height="80"
                  >
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={80}
                        height={80}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Central Logo Circle */}
            <circle
              cx="0"
              cy="0"
              r="60"
              fill="white"
              stroke="#d1d5db"
              strokeWidth="2"
              filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))"
            />
          </svg>

          {/* Central Logo */}
          <div className="absolute w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-200">
            <Image
              src="/assets/rose-v-logo.png"
              alt="Rosewood Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
          </div>

          {/* Feature Text Boxes */}
          {features.map((feature) => {
            const featurePos = getFeaturePosition(feature.position);
            const textPos = getTextBoxPosition(feature.position);

            return (
              <div
                key={`text-${feature.id}`}
                className="absolute"
                style={{
                  left: `calc(50% + ${featurePos.x + textPos.x}px)`,
                  top: `calc(50% + ${featurePos.y + textPos.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`
                  bg-[#fff8f6] 
                  rounded-lg 
                  px-4 py-3 
                  shadow-md
                  w-48
                  ${
                    textPos.align === "right"
                      ? "text-right"
                      : textPos.align === "left"
                      ? "text-left"
                      : "text-center"
                  }
                `}
                >
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRosewoodSection;
