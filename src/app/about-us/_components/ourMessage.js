const OurMessage = () => {
  const features = [
    {
      title: "الجودة العالية",
      description: "",
      bgColor: "bg-orange-50",
    },
    {
      title: "السلامة الغذائية",
      description: "",
      bgColor: "bg-blue-50",
    },
    {
      title: "التصميم العصري",
      description: "",
      bgColor: "bg-green-50",
    },
    {
      title: "والأسعار التنافسية",
      description: "",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-orange-50/30 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">رسالتنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نسعى لتوفير أدوات مطبخ خشبية تجمع بين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className={`text-center group p-8 rounded-2xl ${feature.bgColor} transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            لكل من يقدر التفاصيل الدقيقة في أدواته اليومية، سواء كان مطبخ منزل
            أو مطعم محترف.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMessage;
