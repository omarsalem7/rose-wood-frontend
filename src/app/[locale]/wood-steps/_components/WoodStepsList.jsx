"use client";
import { Button } from "@/components/ui/button";
import { woodStepsList } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GlobalService = () => {
  const [woodSteps, setWoodSteps] = useState([]);
  useEffect(() => {
    setWoodSteps(woodStepsList);
  }, []);
  return (
    <>
      <section className="px-6  pt-30 md:pt-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pb-8 ">
            <h2 className="font-medium text-2xl leading-12">
              خطواتنا المدروسة... تصنع الفرق
            </h2>
            <p className="text-[#586675] text-lg">
              في رووز وود ، نؤمن أن كل تفصيلة في مراحل التصنيع تترك بصمتها على
              المنتج النهائي. من اختيار الخشب وحتى التغليف، نعمل بخبرة، شغف،
              وتقنيات متطورة لنمنحك منتجًا يفوق التوقعات.
            </p>
          </div>
          <div className="bg-[#804524] w-[60%] md:w-[20%] flex mx-auto   h-0.5 relative mb-12">
            <span className="absolute left-0 top-0 z-50 w-1.5 h-1.5 bg-[#804524] rounded-full -translate-y-1/2"></span>
            <span className="absolute right-0 top-0 w-1.5 z-50 h-1.5 bg-[#804524] rounded-full -translate-y-1/2"></span>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4">
            {woodSteps.length > 0 ? (
              woodSteps.map((item, idx) => (
                <div
                  key={item?.id}
                  className="items flex flex-col gap-12 md:gap-24 md:flex-row md:even:flex-row-reverse py-6"
                >
                  <div className="item w-full md:w-[50%] flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-[#1D252E]">
                      {item?.title}
                    </h3>
                    <p className="text-lg text-[#586675]">{item?.desc}</p>
                    <ul className="text-[#804524] text-lg flex flex-col gap-6 py-6">
                      {item?.list?.map((item) => (
                        <li key={item?.id}>
                          <span className="me-3 w-[16px] h-[16px] rounded-full inline-block bg-[#9C5C38] shadow-[#e4a682]"></span>
                          {item?.listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    style={{ backgroundImage: `url('${item?.bgImg}')` }}
                    className={` ${
                      idx % 2 === 0 ? "mr-auto  " : "ml-auto  "
                    }   bg-cover bg-center relative item w-[324px] md:w-[50%] h-[324px]  md:h-[480px] border border-gray-300 rounded-2xl`}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-2xl">
                      <div
                        className={` absolute top-0 md:top-6 ${
                          idx % 2 === 0 ? "right-[-30px]" : "left-[-30px]"
                        }    flex flex-col gap-6`}
                      >
                        <Image
                          src={item?.img1}
                          alt=""
                          width={400}
                          height={400}
                          className="w-[276px] h-[150px] md:w-[373px] md:h-[203px]"
                        />
                        <Image
                          src={item?.img2}
                          alt=""
                          width={400}
                          height={400}
                          className=" w-[276px] h-[150px] md:w-[373px] md:h-[203px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No steps</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-6 py-14">
            <Button className=" w-[186px] rounded-lg text-white bg-[#804524] py-2">
              عــرض كل المـنتجات
            </Button>
            <Button className=" w-[186px] rounded-lg text-[#804524] border border-[#804524] py-2">
              أطلب عينة
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalService;
