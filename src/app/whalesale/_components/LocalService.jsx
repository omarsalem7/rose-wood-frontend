import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const LocalService = () => {
  return (
    <>
      <section className="relative px-6  md:py-26 ">
        <div className="max-w-7xl mx-auto">
          <div className=" ">
            <Image
              src="/assets/whale-line.png"
              alt=""
              width={100}
              height={100}
              className= "hidden md:flex absolute top-[-180px] left-[40%] z-50 w-[417px] h-[419px]"
            />
          </div>
          {/*  */}
          <div className="items flex flex-col gap-16 md:flex-row py-16">
            <div className=" relative item w-full md:w-[50%] h-[300px]  md:h-[480px] border border-gray-300 rounded-2xl">
              <Image
                src="/assets/whale-localservice(1).png"
                alt=""
                width={100}
                height={100}
                className="w-[48%] md:w-[290px] md:h-[261px] absolute top-6 left-6 z-10"
              />
              <Image
                src="/assets/whale-localservice(2).png"
                alt=""
                width={100}
                height={100}
                className="w-[48%] md:w-[290px] md:h-[261px]  absolute bottom-6 right-6 z-50"
              />
            </div>
            <div className="item w-full md:w-[50%] flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#1D252E]">
                حلول توريد محلية للتجّار والمطاعم
              </h3>
              <p className="text-lg text-[#586675]">
                إذا كنت تاجرًا أو صاحب متجر أو مطعم داخل مصر، فنحن في Rosewood
                نوفر لك منتجات مطبخ خشبية مُصنّعة وفق أعلى معايير الجودة،
                وبأسعار جملة تنافسية, نُتيح لك إمكانية تخصيص المنتج حسب طلبك (من
                حيث المقاسات، التغليف، أو طباعة الشعار)، مع خدمة توصيل سريعة إلى
                باب منشأتك خلال 3 – 7 أيام عمل.  نحن شركاؤك في النجاح، نلتزم
                بالدقة، والسرعة، والموثوقية.
              </p>
              <ul className="text-[#804524] text-lg flex flex-col gap-6 pb-6">
                <li>اطلب كميات جملة بأسعار تنافسية</li>
                <li>توصيل داخل مصر خلال 3 – 7 أيام</li>
                <li> تصنيع حسب طلبك (الشعار – الحجم – التغليف)</li>
                <li>دعم سريع ومخصص للتجار داخل السوق المحلي</li>
              </ul>
              <Button className="w-fit px-10 rounded-lg text-white bg-[#5F361F] py-2">
                عرض سعر لطلب محلي
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalService;
