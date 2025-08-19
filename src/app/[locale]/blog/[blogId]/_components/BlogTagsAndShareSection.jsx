import React from "react";
const BlogTagsAndShareSection = ({ blog }) => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="border-b-5 border-[#727580] pb-10">
          <div className="text-[18px] md:text-[32px] font-medium text-[#063046] pb-3">
            {blog.subTitle2}
          </div>
          <ul className="space-y-5 mb-6 list-disc list-inside">
            {blog.list.map((item) => (
              <li
                key={item.id}
                className="leading-9 md:leading-[50px] text-[#727580] text-xl"
              >
                {item.text}
              </li>
            ))}
          </ul>
          {/* <div className="p-4 flex md:justify-between flex-wrap justify-start w-[320px] md:w-[610px] border border-gray-100 shadow mb-6">
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
          </div> */}
          {/* <div className="">
            <span className="text-2xl font-medium text-[#4D4E5F]">
              التاجات:
            </span>
            <Link
              href=""
              className="text-2xl font-medium text-[#AB7C4C] underline"
            >
              Tag-1
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogTagsAndShareSection;
