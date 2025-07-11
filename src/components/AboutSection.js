import Image from "next/image";

export default function AboutSection({
  title,
  description,
  images,
  buttons,
  features,
}) {
  return (
    <section className="py-8 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Content */}
          <div className="text-right flex flex-col justify-center h-full">
            <div className="mb-8">
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
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white"
                    />
                  </div>
                  <span className="text-gray-700">{feature.item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
                {buttons[0].title}
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                {buttons[1].title}
              </button>
            </div>
          </div>
          {/* Images Grid with overlay */}
          <div className="grid grid-cols-2 gap-4 h-full relative">
            {/* Blur overlay with logo - positioned only over images */}
            <div className="absolute inset-0  flex items-center justify-center z-10 rounded-lg">
              <div className="h-18 w-18 md:h-36 md:w-36 backdrop-blur-md bg-[#FFFFFF6E] rounded-full shadow-lg">
                <Image
                  src="/assets/rose-v-logo.png"
                  alt="Rosewood Logo"
                  className="px-2 py-5 md:px-6 md:py-9"
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
              />
            </div>
            <div className="space-y-4 flex flex-col h-full">
              <Image
                src={images[1].img}
                width={600}
                height={600}
                alt="Wooden bowls and kitchen items"
                className="w-full flex-1 object-cover rounded-lg shadow-lg"
              />
              <Image
                src={images[2].img}
                width={600}
                height={600}
                alt="Wooden bowls and utensils set"
                className="w-full flex-1 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
