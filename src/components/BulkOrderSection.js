import Link from "next/link";

const BulkOrderSection = ({ title, card1, card2, locale }) => {
  return (
    <section className="py-12 md:py-16 px-6  bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] md:text-[32px] font-medium mb-4">
            {title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto min-h-[40vh]">
          {/* Bulk Order Card */}
          <div
            className="min-h-[38vh] rounded-lg p-4 md:p-8 shadow-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(253, 242, 239), rgba(255, 248, 246, 0.89)), url('/assets/bulk-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-8">
              <h3 className="md:text-[24px] font-medium mb-4">{card1.title}</h3>
              <p className="leading-relaxed text-[#4E5F73]  text-[20px] mb-8">
                {card1.description}
              </p>

              {/* Button */}
              <Link
                href={`/${locale}/order/local-export`}
                className="bg-[#5F361F] absolute min-w-36 text-center md:bottom-10 md:right-10 bottom-2  right-2 text-white  px-2 md:px-8  py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
              >
                {card1.buttonText}
              </Link>
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
          <div
            className="min-h-[38vh] rounded-lg p-8 shadow-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(253, 242, 239), rgba(255, 248, 246, 0.89)), url('/assets/bulk-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-8">
              <h3 className="md:text-[24px] font-medium mb-4">{card2.title}</h3>
              <p className="leading-relaxed text-[#4E5F73]  text-[20px] mb-8">
                {card2.description}
              </p>

              {/* Button */}
              <Link
                href={`/${locale}/order/international-export`}
                className="absolute md:bottom-10 md:right-10 bottom-2  right-2 bg-[#5A6E51]  text-white px-4 min-w-36 text-center md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors duration-200"
              >
                {card2.buttonText}
              </Link>
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
