import Image from "next/image";
import { fetchWhyChooseRoseWood } from "@/lib/api/cms";

const WhyChooseRosewoodSection = async () => {
  // Fetch data from API
  const whyChooseData = await fetchWhyChooseRoseWood();
  const features = whyChooseData.features;

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
    <>
      {/* Desktop/Tablet Layout */}
      <section className="py-20 px-6 max-lg:hidden" id="whyUseRosewood">
        <h2 className="text-center text-[18px] md:text-[32px] font-medium">
          {whyChooseData.title || "لماذا تختار روز وود"}
        </h2>
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
                      strokeWidth="1"
                    />

                    {/* Line from feature circle to text box */}
                    <line
                      x1={featurePos.x}
                      y1={featurePos.y}
                      x2={featurePos.x + textPos.x}
                      y2={featurePos.y + textPos.y}
                      stroke="#9ca3af"
                      strokeWidth="1"
                    />

                    {/* Feature Circle */}
                    {/* <circle
                      cx={featurePos.x}
                      cy={featurePos.y}
                      r="50"
                      fill="white"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
                    /> */}

                    {/* Feature Image */}
                    <foreignObject
                      x={featurePos.x - 50}
                      y={featurePos.y - 50}
                      width="100"
                      height="100"
                    >
                      <div
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.text}
                          width={100}
                          height={100}
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
                strokeWidth="1"
                filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))"
              />
            </svg>

            {/* Central Logo */}
            <Image
              src="/icons/why-choose-rosewood-logo.svg"
              alt="Rosewood Logo"
              width={56}
              height={56}
              className="absolute w-48 h-48 bg-white rounded-full"
              draggable={false}
            />

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
                  bg-[#FFF6F4] 
                  rounded-xl 
                  p-4 
                  w-48
                  text-start
                `}
                  >
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden py-12 px-3" id="whyUseRosewood">
        <h2 className="text-center font-semibold text-xl mb-6">
          {" "}
          {whyChooseData.title || "لماذا تختار روز وود"}
        </h2>
        <div className="flex flex-col gap-4">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="flex flex-row items-center bg-[#fff8f6] rounded-xl px-3 py-3 shadow-sm"
            >
              <div className="flex-1 text-start">
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  {feature.text}
                </p>
              </div>

              <div className="flex-shrink-0 ml-3">
                <Image
                  src={feature.image}
                  alt={feature.text}
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-14 h-14"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseRosewoodSection;
