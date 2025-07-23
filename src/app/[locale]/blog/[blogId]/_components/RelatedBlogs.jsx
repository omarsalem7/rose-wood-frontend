import Image from "next/image";
import React from "react";

const RelatedBlogs = () => {
  return (
    <>
      <section className="px-6 py-6">
        <div className="max-w-6xl mx-auto ">
          <div className="text-[32px] font-medium text-[#063046] pb-3">
            مقالات ذات صلة
          </div>
          <div className="items flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[33%] rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={100}
                  height={100}
                  className="w-full md:w-[342px] h-[262px]"
                />
              </div>
              <div className="mb-4">
                <h2 className="pb-3 text-[#333D51] font-medium">
                  عنوان نص الـموضوع يكون في هذا المكان
                </h2>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  الن...أقرا الـمزيـد
                </p>
              </div>
              <div className="font-medium text-[#727580] flex justify-between items-center border-t-2 border-gray-100 w-full pt-3">
                <div className="flex gap-2 ">
                  <span className="">6842</span>
                  <span className="">320</span>
                </div>
                <div className="">5/5/2023</div>
              </div>
            </div>
            <div className="w-full md:w-[33%] rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={100}
                  height={100}
                  className="w-full md:w-[342px] h-[262px]"
                />
              </div>
              <div className="mb-4">
                <h2 className="pb-3 text-[#333D51] font-medium">
                  عنوان نص الـموضوع يكون في هذا المكان
                </h2>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  الن...أقرا الـمزيـد
                </p>
              </div>
              <div className="font-medium text-[#727580] flex justify-between items-center border-t-2 border-gray-100 w-full pt-3">
                <div className="flex gap-2 ">
                  <span className="">6842</span>
                  <span className="">320</span>
                </div>
                <div className="">5/5/2023</div>
              </div>
            </div>
            <div className="w-full md:w-[33%] rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={100}
                  height={100}
                  className="w-full md:w-[342px] h-[262px]"
                />
              </div>
              <div className="mb-4">
                <h2 className="pb-3 text-[#333D51] font-medium">
                  عنوان نص الـموضوع يكون في هذا المكان
                </h2>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  الن...أقرا الـمزيـد
                </p>
              </div>
              <div className="font-medium text-[#727580] flex justify-between items-center border-t-2 border-gray-100 w-full pt-3">
                <div className="flex gap-2 ">
                  <span className="">6842</span>
                  <span className="">320</span>
                </div>
                <div className="">5/5/2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
