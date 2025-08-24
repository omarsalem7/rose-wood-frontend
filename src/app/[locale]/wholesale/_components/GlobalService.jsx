import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";

const GlobalService = ({ global, locale }) => {
  return (
    <>
      <section className="px-6  pt-30 md:pt-60 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pb-8 ">
            <h2 className="font-medium text-2xl leading-12">{global.title}</h2>
            <p className="text-[#586675] text-lg">{global.description}</p>
          </div>
          <div className="bg-[#804524] w-[60%] flex mx-auto md:hidden h-0.5 relative">
            <span className="absolute left-0 top-0 z-50 w-1.5 h-1.5 bg-[#804524] rounded-full -translate-y-1/2"></span>
            <span className="absolute right-0 top-0 w-1.5 z-50 h-1.5 bg-[#804524] rounded-full -translate-y-1/2"></span>
          </div>
          {/*  */}
          <div className="items flex flex-col-reverse gap-10 md:gap-16 md:flex-row py-8 md:py-16">
            <div className="item w-full md:w-[50%] flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#1D252E]">
                {global.service.title}
              </h3>
              <p className="text-lg text-[#586675]">
                {global.service.description}
              </p>
              <ul className="text-[#804524] text-lg flex flex-col gap-6 pb-6">
                {global.service.list.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <Link
                href={`/${locale}/order/international-export`}
                className="cursor-pointer w-fit px-10 rounded-lg text-white bg-[#5A6E51] py-2 z-10"
              >
                {global.service.buttontext}
              </Link>
            </div>
            <div className="relative item w-full md:w-[50%] h-[300px]  md:h-[480px] border border-gray-300 rounded-2xl">
              <SafeImage
                src={global.service.image1}
                alt="whale-globalservice"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px] absolute top-6  z-10"
                style={{
                  insetInlineEnd: "1.5rem",
                }}
                fallbackClassName="w-[48%] md:w-[290px] md:h-[261px] absolute top-6 z-10 bg-gray-200 rounded-lg flex items-center justify-center"
              />
              <SafeImage
                src={global.service.image2}
                alt="whale-globalservice2"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px]  absolute bottom-6  z-10"
                style={{
                  insetInlineStart: "1.5rem",
                }}
                fallbackClassName="w-[48%] md:w-[290px] md:h-[261px] absolute bottom-6 z-10 bg-gray-200 rounded-lg flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalService;
