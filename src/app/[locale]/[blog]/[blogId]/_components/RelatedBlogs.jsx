import Image from "next/image";
import React from "react";

const RelatedBlogs = () => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-[32px] font-medium text-[#063046] pb-3">
            مقالات ذات صلة
          </div>
          <div className="items grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={500}
                  height={500}
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
                <div></div>
                <div>5/5/2023</div>
              </div>
            </div>
            <div className="rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={500}
                  height={500}
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
                <div></div>
                <div>5/5/2023</div>
              </div>
            </div>
            <div className="rounded-lg p-3 shadow-lg">
              <div className="mb-3">
                <Image
                  src="/assets/blog-details-maincontent.png"
                  alt="dsdsd"
                  width={500}
                  height={500}
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
                <div></div>
                <div>5/5/2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
