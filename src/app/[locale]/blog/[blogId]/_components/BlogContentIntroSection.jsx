import Image from "next/image";
import React from "react";
import Skeleton from "@/components/ui/skeleton";

const BlogContentIntroSection = ({ blog }) => {
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-center pb-6">
            <h1 className="text-3xl md:text-5xl  font-medium leading-14 md:leading-[80px] text-[#4D4E5F] pb-5 md:pb-3">
              {blog.title}
            </h1>
            <p className="font-medium text-xl text-[#727580] leading-8">
              {blog.description}
            </p>
          </div>

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
