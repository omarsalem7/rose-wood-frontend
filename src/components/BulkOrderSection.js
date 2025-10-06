import Link from "next/link";
import Image from "next/image";

const BulkOrderSection = ({ title, card1, card2, locale }) => {
  return (
    <section className="py-12 md:py-16 px-6  bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-[18px] md:text-[32px] font-medium">{title}</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto min-h-[48vh]">
          {/* Bulk Order Card */}
          <div
            className="min-h-[38vh] rounded-lg p-4 md:p-8 shadow-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(253, 242, 239), rgba(255, 248, 246, 0.89)), url('/assets/bulk-bg.webp')`,
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
                {card1.btnText}
              </Link>
            </div>

            {/* Product Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-56 md:h-56">
              {card1.image && card1.image.trim() !== "" ? (
                <Image
                  src={card1.image}
                  alt="Bulk Order Products"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg">
                  <span className="text-sm">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Global Export Card */}
          <div
            className="min-h-[38vh] rounded-lg p-8 shadow-sm relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(253, 242, 239), rgba(255, 248, 246, 0.89)), url('/assets/bulk-bg.webp')`,
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
                {card2.btnText}
              </Link>
            </div>

            {/* Product Image - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-56 md:h-56">
              {card2.image && card2.image.trim() !== "" ? (
                <Image
                  src={card2.image}
                  alt="Export Products"
                  width={224}
                  height={224}
                  className="w-full h-full object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg">
                  <span className="text-sm">No Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
