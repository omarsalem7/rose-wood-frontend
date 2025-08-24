const Vision = ({ title, description }) => {
  return (
    <section
      className="relative py-20 mb-20 w-full md:max-w-7xl mx-auto px-6 2xl:px-0 rounded-3xl bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/vision-bg.png')`,
      }}
    >
      {/* Dark overlay - only on background */}
      <div className="absolute inset-0  rounded-3xl bg-[#1a100ad8]"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl font-semibold text-white mb-8"
          >
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-lg text-white leading-relaxed"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
