import React from "react";
import Image from "next/image";
import Skeleton from "@/components/ui/skeleton";

const BlogMainContentSection = ({ blog }) => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-[18px] md:text-[32px] font-medium text-[#063046] pb-3">
            {blog.subTitle}
          </div>
          <div className="items flex flex-col md:flex-row gap-6 ">
            <div className="w-full md:w-1/2 h-[405px]">
              {blog.subImage ? (
                <Image
                  src={blog.subImage}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover  rounded-xl"
                />
              ) : (
                <Skeleton variant="article" className="w-full h-full" />
              )}
            </div>
            <div className="w-full md:w-1/2 pl-3">
              <p className="text-[#727580] text-xl pb-14 leading-[36px]">
                {blog.subDescription1}
              </p>
              <p className="text-[#727580] text-xl leading-[36px]">
                {blog.subDescription2}
              </p>
            </div>
          </div>
          <div className="text-xl font-medium text-[#727580] leading-8 pt-8">
            {blog.subImage_caption}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMainContentSection;
