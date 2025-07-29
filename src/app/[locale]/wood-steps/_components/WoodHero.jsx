import Image from "next/image";
import React from "react";

const WoodHero = ({ heroData }) => {
  return (
    <>
      {/* pb-60 */}
      <section className="relative bg-white">
        <div className="px-6  bg-[url('/assets/whale-hero-bg.png')] md:h-[calc(100vh-70px)] h-[calc(100vh-120px)] bg-cover bg-center">
          <div className="max-w-7xl mx-auto py-14">
            <div className=" text-center mb-8 md:mb-24">
              <h1
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-2xl md:text-3xl font-semibold pb-6"
              >
                {heroData.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="text-xl md:text-2xl font text-[#586675]"
              >
                {heroData.description}
              </p>
            </div>
            <div className="relative pb-66 md:pb-24">
              <div
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
                className="   w-[56px] h-[56px] md:w-[104px] md:h-[104px] flex   rounded-2xl bg-white absolute top-0 left-10 rotate-[-30deg]"
              >
                <Image
                  src="/assets/whale-earth.png"
                  alt="rotate-left"
                  width={100}
                  height={100}
                  className="rotate-[30deg]"
                />
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
                className="  flex w-[56px] h-[56px] md:w-[104px] md:h-[104px] rounded-2xl bg-white absolute top-0 right-10 rotate-[30deg]"
              >
                <Image
                  src="/assets/whale-ship.png"
                  alt="rotate-right"
                  width={100}
                  height={100}
                  className="rotate-[-30deg]"
                />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="flex w-full justify-center overflow-hidden absolute bottom-[-30px] md:bottom-[-180px] pt-16  gap-8     ">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="600"
            className=" shrink-0"
          >
            <Image
              src={heroData.image1}
              alt="hero1"
              width={400}
              height={400}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="800"
            className="mt-[-60px]  shrink-0  "
          >
            <Image
              src={heroData.image2}
              alt="hero2"
              width={400}
              height={400}
              className=" w-[256px] h-[252px] md:w-[400px] md:h-[381px] rounded-3xl"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="1000"
            className=" shrink-0"
          >
            <Image
              src={heroData.image3}
              alt="hero3"
              width={400}
              height={400}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
            />
          </div>
        </div>
        {/*  */}
      </section>
    </>
  );
};

export default WoodHero;
