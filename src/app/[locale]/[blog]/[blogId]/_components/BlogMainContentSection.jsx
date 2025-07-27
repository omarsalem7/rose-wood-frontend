import React from "react";
import Image from "next/image";

const BlogMainContentSection = () => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-[32px] font-medium text-[#063046] pb-3">
            عنوان فرعي داخل المدونـة
          </div>
          <div className="items flex flex-col md:flex-row gap-6 ">
            <div className="w-full md:w-1/2 h-[405px]">
              <Image
                src="/assets/blog-details-maincontent.png"
                alt="dsdsd"
                width={500}
                height={500}
                className="w-full h-full object-cover  rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 pl-3">
              <p className="text-[#727580] text-xl pb-14 leading-[36px]">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص.
              </p>
              <p className="text-[#727580] text-xl leading-[36px]">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
          </div>
          <div className="text-xl font-medium text-[#727580] leading-8 pt-8">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMainContentSection;
