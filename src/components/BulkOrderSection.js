const BulkOrderSection = () => {
  return (
    <section className="py-12 md:py-16 px-6  bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl md:font-semibold text-black mb-4">
            طلب بالجملة او تصدير عالمي
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto min-h-[37vh]">
          {/* Bulk Order Card */}
          <div className="bg-gradient-to-r  max-sm:min-h-[30vh] from-[#fdf2ef] to-[#FFF8F600]  rounded-2xl p-4 md:p-8 shadow-sm relative overflow-hidden">
            <div className="mb-8">
              <h3 className="md:text-xl font-semibold md:font-bold text-black mb-4">
                هل لديك متجر أو تعمل كموزع؟
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                احصل على منتجات مصممة خصيصاً لعلامتك التجارية، مع خيارات متعددة
                من المقاسات والألوان والنقائش
              </p>

              {/* Button */}
              <button className="bg-[#5F361F] absolute bottom-[32px] right-[32px] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
                عرض سعر مخصص
              </button>
            </div>

            {/* Product Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-48 md:h-48">
              <img
                src="/lovable-uploads/f1a06fcb-5d2c-46fa-8e51-90b3cfab4133.png"
                alt="Bulk Order Products"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Global Export Card */}
          <div className="bg-gradient-to-r max-sm:min-h-[30vh] from-[#fdf2ef] to-[#FFF8F600] rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <div className="mb-8">
              <h3 className="md:text-xl font-semibold md:font-bold text-black mb-4">
                نقوم بالتصدير بشكل محلي وعالمي
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                منتجاتنا تصل إليك بتغليف آمن، مع توفير شهادات المنشأ وقائمة
                العبوة لضمان سهولة التخليص الجمركي
              </p>

              {/* Button */}
              <button className="absolute bottom-[32px] right-[32px] bg-[#5A6E51]  text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors duration-200">
                عرض سعر مخصص
              </button>
            </div>

            {/* Product Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-56 md:h-56">
              <img
                src="/lovable-uploads/9d836571-687a-4ae1-8ef1-7473e1c9ccae.png"
                alt="Export Products"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
