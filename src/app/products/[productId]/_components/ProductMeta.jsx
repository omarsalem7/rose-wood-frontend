import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductMeta = () => {
  return (
    <>
      <section className="px-6 ">
        <div className="max-w-7xl mx-auto">
          {/*  */}
          <div className="text-center text-[#586675] text-lg">
            نعتني بكل خطوة من خطوات الإنتاج
          </div>
          {/*  */}
          <div className="items flex flex-col md:flex-row items-center justify-between  py-12">
            <div className="w-full md:w-[40%]">
              {/*  */}
              <div className="space-y-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white"
                    />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold">اختيارالخشب</span> : نستخدم خشب
                    طبيعي عالي الجودة
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white"
                    />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold">التجفيف:</span> تجفيف الخشب في
                    أفران مخصصة للتحكم في الرطوبة
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white"
                    />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold">التشطيب:</span> باستخدام زيوت
                    طبيعية وشمع آمن للطعام
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E5FFE9] rounded-full p-1">
                    <Image
                      width={16}
                      height={16}
                      src="/icons/check.svg"
                      alt="check icon"
                      className="text-white "
                    />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold">التغليف:</span> تغليف احترافي
                    مناسب للبيع المحلي والتصدير
                  </span>
                </div>
              </div>

              {/*  */}
            </div>
            <div className=" w-full md:w-[60%] flex jmd:ustify-end gap-2 md:gap-6">
              <Image
                src="/assets/product-meta2.png"
                alt=""
                width={294}
                height={120}
              />
              <Image
                src="/assets/product-meta1.png"
                alt=""
                width={400}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductMeta;
