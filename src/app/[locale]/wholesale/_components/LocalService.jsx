import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import Image from "next/image";

const LocalService = ({ local, locale }) => {
  return (
    <>
      <section className="relative px-6  md:py-26 md:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="hidden md:flex">
            <Image
              src="/assets/whale-line.png"
              alt="line-ar"
              width={400}
              height={400}
              className="absolute top-[-240px] left-[40%] z-5 w-[417px] h-[419px] ltr:hidden"
            />
            <Image
              src="/assets/whale-line-En.png"
              alt="line-en"
              width={400}
              height={400}
              className="absolute ltr:top-[-300px] top-[-240px] left-[40%] z-5 w-[417px] h-[419px] rtl:hidden"
            />
          </div>

          {/*  */}
          <div className="items flex flex-col gap-10 md:gap-16 md:flex-row py-8 md:py-16">
            <div className=" relative item w-full md:w-[50%] h-[300px]  md:h-[480px] border border-gray-300 rounded-2xl">
              <SafeImage
                src={local.image1}
                alt="whale-localservice(1)"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px] absolute top-6  z-10"
                style={{
                  insetInlineEnd: "1.5rem",
                }}
                fallbackClassName="w-[48%] md:w-[290px] md:h-[261px] absolute top-6 z-10 bg-gray-200 rounded-lg flex items-center justify-center"
              />
              <SafeImage
                src={local.image2}
                alt="whale-localservice(2)"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px]  absolute bottom-6  z-10"
                style={{
                  insetInlineStart: "1.5rem",
                }}
                fallbackClassName="w-[48%] md:w-[290px] md:h-[261px] absolute bottom-6 z-10 bg-gray-200 rounded-lg flex items-center justify-center"
              />
            </div>
            <div className="item w-full md:w-[50%] flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#1D252E]">
                {local.title}
              </h3>
              <p className="text-lg text-[#586675]">{local.description}</p>
              <ul className="text-[#804524] text-lg flex flex-col gap-6 pb-6">
                {local.list.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <Link
                href={`/${locale}/order/local-export`}
                className="cursor-pointer w-fit px-10 rounded-lg text-white bg-[#5A6E51] py-2"
              >
                {local.buttontext}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalService;
