import React from "react";
import Image from "next/image";
import SafeImage from "@/components/SafeImage";

const WhaleHero = ({ hero }) => {
  return (
    <>
      {/* pb-60 */}
      <section className=" relative bg-white   ">
        <div className="px-6  bg-[url('/assets/whale-hero-bg.png')] md:h-[calc(100vh-70px)] h-[calc(100vh-120px)] bg-cover bg-center">
          <div className="max-w-7xl mx-auto py-14">
            <div className=" text-center mb-2 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold pb-6">
                {hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#586675]">
                {hero.description}
              </p>
            </div>
            <div className="relative pb-52">
              <div className="hidden w-[56px] h-[56px] md:flex md:w-[104px] md:h-[104px] rounded-2xl md:rounded-3xl bg-white absolute top-0 left-0 rotate-[-30deg]">
                <Image
                  src="/assets/whale-earth.png"
                  alt="whale-earth1"
                  width={100}
                  height={100}
                  className="rotate-[30deg]"
                />
              </div>
              <div className="w-[56px] h-[56px]  md:hidden xl:flex md:w-[104px] md:h-[104px] rounded-2xl md:rounded-3xl bg-white absolute top-[61px] left-0 md:top-[61px] md:left-[295px] rotate-[30deg]">
                <Image
                  src="/assets/whale-uprise.png"
                  alt="whale-uprise"
                  width={100}
                  height={100}
                  className="rotate-[-30deg]"
                />
              </div>
              <div className="w-[56px] h-[56px]  md:hidden xl:flex md:w-[104px] md:h-[104px] rounded-2xl md:rounded-3xl bg-white absolute top-[61px] right-0  md:top-[61px] md:right-[295px] rotate-[-30deg]">
                <Image
                  src="/assets/whale-earth.png"
                  alt="whale-earth"
                  width={100}
                  height={100}
                  className="rotate-[-140deg]"
                />
              </div>
              <div className="hidden md:flex w-[104px] h-[104px] rounded-2xl md:rounded-4xl bg-white absolute top-0 right-0 rotate-[30deg]">
                <Image
                  src="/assets/whale-ship.png"
                  alt="whale-ship"
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
        <div className="flex w-full justify-center overflow-hidden absolute bottom-[-30px] md:bottom-[-180px] pt-16  gap-5 md:gap-8">
          <div className=" shrink-0">
            <SafeImage
              src={hero.image1}
              alt="whale-hero(1)"
              width={400}
              height={400}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
              fallbackClassName="w-[149px] h-[175px] md:w-[400px] md:h-[365px] bg-gray-200 rounded-3xl flex items-center justify-center"
            />
          </div>
          <div className="mt-[-60px]  shrink-0  ">
            <SafeImage
              src={hero.image2}
              alt="whale-hero(2)"
              width={400}
              height={400}
              className=" w-[256px] h-[252px] md:w-[400px] md:h-[381px] rounded-3xl"
              fallbackClassName="w-[256px] h-[252px] md:w-[400px] md:h-[381px] bg-gray-200 rounded-3xl flex items-center justify-center"
              priority={true}
            />
          </div>
          <div className=" shrink-0">
            <SafeImage
              src={hero.image3}
              alt="whale-hero(3)"
              width={400}
              height={400}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
              fallbackClassName="w-[149px] h-[175px] md:w-[400px] md:h-[365px] bg-gray-200 rounded-3xl flex items-center justify-center"
            />
          </div>
        </div>
        {/*  */}
      </section>
    </>
  );
};

export default WhaleHero;
