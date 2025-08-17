import Image from "next/image";
import Link from "next/link";

export default function AboutSection({
  title,
  description,
  images,
  buttons,
  list,
  locale,
}) {
  return (
    <section
      id="about-us"
      className="py-8 md:py-24 px-6 bg-white h-full w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch h-full">
          {/* Content */}
          <div className="text-start flex flex-col justify-center ">
            <div className="mb-8" data-aos="fade-right" data-aos-duration="600">
              <div className="flex items-center justify-start gap-2 mb-4">
                <Image
                  src="/icons/rose-icon.svg"
                  width={30}
                  height={30}
                  alt="Rosewood Logo"
                />
                <h2 className="text-2xl md:text-3xl  text-black">{title}</h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Features List */}
            <div
              className="space-y-4 mb-8"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              {list.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={300 + idx * 100}
                >
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white"
                    />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="flex gap-4"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <Link
                href={`${locale}/products`}
                className="bg-[#5F361F] text-white  px-4 md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
              >
                {buttons[0].text}
              </Link>
              <Link
                href={`${locale}/order/request-sample`}
                className="border border-gray-300 text-gray-700 px-4 md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                {buttons[1].text}
              </Link>
            </div>
          </div>
          {/* Images Grid with overlay */}
          <div
            className="grid grid-cols-2 gap-4 h-full relative"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            {/* Blur overlay with logo - positioned only over images */}
            <div
              className="absolute inset-0  flex items-center justify-center z-10 rounded-lg"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div className="h-18 w-18 md:h-36 md:w-36 backdrop-blur-md bg-[#FFFFFF6E] rounded-full shadow-lg">
                <Image
                  src="/assets/rose-v-logo.svg"
                  alt="Rosewood Logo"
                  className="px-2 py-5 md:px-6 md:py-9 max-sm:w-[95px]"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            {/* Top row */}
            <div className="space-y-4 flex flex-col h-full">
              <Image
                src={images[0].img}
                width={400}
                height={600}
                alt="Wooden cutting boards and kitchen utensils"
                className="w-full flex-1 object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400"
              />
            </div>
            <div className="space-y-4 flex flex-col h-full">
              <Image
                src={images[1].img}
                width={600}
                height={600}
                alt="Wooden bowls and kitchen items"
                className="w-full flex-1 object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="600"
              />
              <Image
                src={images[2].img}
                width={600}
                height={600}
                alt="Wooden bowls and utensils set"
                className="w-full flex-1 object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
