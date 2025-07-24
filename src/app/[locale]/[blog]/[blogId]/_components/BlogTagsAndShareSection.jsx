import Link from "next/link";
import React from "react";
import { Facebook, Instagram, X } from "lucide-react";
const BlogTagsAndShareSection = () => {
  return (
    <>
      <section className="px-6 py-6">
        <div className="max-w-6xl mx-auto  border-b-5 border-[#727580] pb-10">
          <div className="text-[32px] font-medium text-[#063046] pb-3">
            عنوان فرعي داخل المدونـة
          </div>
          <ul className="flex flex-col gap-5 mb-6">
            <li className="   leading-9 md:leading-[50px] text-[#727580] text-xl flex items-center ">
              <span className="w-[16px] h-[16px] rounded-full bg-[#4D4E5F] shrink-0 flex"></span>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق
            </li>
            <li className="leading-9 md:leading-[50px] text-[#727580] text-xl flex items-center">
              <span className="w-[16px] h-[16px] rounded-full bg-[#4D4E5F] shrink-0 flex"></span>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق
            </li>
            <li className="leading-9 md:leading-[50px] text-[#727580] text-xl flex items-center">
              <span className="w-[16px] h-[16px] rounded-full bg-[#4D4E5F] shrink-0 flex"></span>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق
            </li>
          </ul>
          <div className="p-4 flex md:justify-between flex-wrap justify-start w-[320px] md:w-[610px] border border-gray-100 shadow mb-6">
            <Link
              href=""
              className="text-[#4D4E5F]  border-l-0 md:border-l flex pb-3 md:pb-0 md:pl-6 border-gray-200"
            >
              <X /> مشاركة علي منصه أكس
            </Link>
            <Link
              href=""
              className="text-[#4D4E5F]  border-l-0 md:border-l flex pb-3 md:pb-0 md:px-6 border-gray-200"
            >
              <Facebook /> مشاركة علي فيسبوك
            </Link>
            <Link
              href=""
              className="text-[#4D4E5F]    flex pb-3 md:pb-0 md:pr-6  "
            >
              <Instagram /> <span className="px-1">مشاركة علي انستجرام</span>
            </Link>
          </div>
          <div className="">
            <span className="text-2xl font-medium text-[#4D4E5F]">
              التاجات:
            </span>
            <Link
              href=""
              className="text-2xl font-medium text-[#AB7C4C] underline"
            >
              Tag-1
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTagsAndShareSection;
