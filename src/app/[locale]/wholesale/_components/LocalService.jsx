import Image from "next/image";
import Link from "next/link";
import React from "react";

const LocalService = ({ local, locale }) => {
  return (
    <>
      <section className="relative px-6  md:py-26 ">
        <div className="max-w-7xl mx-auto">
          <div className=" ">
            <Image
              src="/assets/whale-line.png"
              alt="line"
              width={400}
              height={400}
              className="hidden md:flex absolute top-[-180px] left-[40%] z-5 w-[417px] h-[419px]"
            />
          </div>
          {/*  */}
          <div className="items flex flex-col gap-16 md:flex-row py-16">
            <div className=" relative item w-full md:w-[50%] h-[300px]  md:h-[480px] border border-gray-300 rounded-2xl">
              <Image
                src={local.image1}
                alt="whale-localservice(1)"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px] absolute top-6 left-6 z-10"
              />
              <Image
                src={local.image2}
                alt="whale-localservice(2)"
                width={400}
                height={400}
                className="w-[48%] md:w-[290px] md:h-[261px]  absolute bottom-6 right-6 z-50"
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
