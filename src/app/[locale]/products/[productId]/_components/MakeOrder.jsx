import { Button } from "@/components/ui/button";
import React from "react";

const MakeOrder = () => {
  return (
    <>
      <div className="bg-[#FFF8F6]  px-6 ">
        <div className="max-w-7xl mx-auto py-6 flex flex-col gap-5 md:flex-row items-center justify-between">
          <div className="">
            <span className="text-sm font-bold text-[#5F361F]">
              هل اعجبك المنتج:
            </span>
            <p className="text-[#586675] text-lg">
              نستخدم أخشاب طبيعية مجففة، ونشطبها بزيوت وشموع آمنة للطعام
            </p>
          </div>
          <div className="flex gap-6">
            <Button className="   w-[150px] md:w-[294px]  border border-[#5F361F] text-[#5F361F] rounded-lg">
              طلب عينة
            </Button>
            <Button className="   w-[150px] md:w-[294px]  text-white bg-[#5F361F]">
              طلب عرض سعر خاص
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeOrder;
