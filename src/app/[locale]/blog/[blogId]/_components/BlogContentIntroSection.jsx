import Image from "next/image";
import React from "react";
import Skeleton from "@/components/ui/skeleton";

const BlogContentIntroSection = ({ blog }) => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-center pb-6">
            <h1 className="text-3xl md:text-5xl font-medium leading-14 md:leading-24 text-[#4D4E5F] pb-5 md:pb-3">
              {blog.title}
            </h1>
            <p className="font-medium text-xl text-[#727580] leading-8">
              {blog.description}
            </p>
          </div>
          {/* <div className="items rounded-lg shadow-xl flex flex-col md:flex-row justify-between p-6 mb-10">
            <div className="w-full md:w-[40%] border-b md:border-b-0 ltr:border-b-0 ltr:border-r ltr:border-l-0 ltr:pr-5 ltr:pl-5 pb-3 md:border-l border-gray-200  md:pl-10">
              <div className="flex gap-3 pb-3">
                <div className="">
                  <Image
                    src="/assets/blog-details-hero(1).png"
                    alt="dsd"
                    width={100}
                    height={100}
                    className="w-[48px] h-[48px] rounded-full "
                  />
                </div>
                <div className="">
                  <h3 className="text-[#A57544] font-medium">محمد مصطفي علي</h3>
                  <span className="text-[#727580] text-lg">كاتب الموضوع</span>
                </div>
              </div>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل{" "}
              </p>
            </div>
            <div className="w-full md:w-[60%] px-0 md:px-14 pt-4 md:pt-0">
              <ul className="flex gap-x-5 md:gap-x-16 gap-y-12  flex-wrap  ">
                <li className="text-xl px-1 md:px-3  font-medium flex items-center gap-2">
                  <Eye className="text-[#A57544]" /> 25 الف
                </li>
                <li className="text-xl px-1 md:px-3  font-medium flex items-center gap-2">
                  <MessageSquareMore className="text-[#A57544]" /> 130 تعليق
                </li>
                <li className="text-xl px-1 md:px-3  font-medium flex items-center gap-2">
                  <CalendarRange className="text-[#A57544]" /> 5/5/2023
                </li>
                <li className="text-xl px-1 md:px-3  font-medium flex items-center  gap-2">
                  <BookOpenText className="text-[#A57544]" /> قراءة 3 دقائق
                </li>
                <li className="text-xl px-1 md:px-3  font-medium flex items-center gap-2">
                  <BookOpenText className="text-[#A57544]" /> الاخشاب الصحية
                </li>
              </ul>
            </div>
          </div> */}
          <div className="items pb-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              {blog.image ? (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={600}
                  className="w-full h-[50vh] object-cover rounded-xl"
                />
              ) : (
                <Skeleton variant="article" className="w-full h-[50vh]" />
              )}
            </div>
            <div className="w-full">
              {blog.image2 ? (
                <Image
                  src={blog.image2}
                  alt={blog.title}
                  width={600}
                  height={600}
                  className="w-full h-[50vh] object-cover rounded-xl"
                />
              ) : (
                <Skeleton variant="article" className="w-full h-[50vh]" />
              )}
            </div>
          </div>
          <div className="text-xl font-medium text-[#727580] leading-8">
            {blog.imageCaption}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContentIntroSection;
