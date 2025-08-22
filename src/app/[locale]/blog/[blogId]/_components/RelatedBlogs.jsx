import Image from "next/image";
import React from "react";
import { getRelatedBlogs } from "@/lib/api/collections";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import Link from "next/link";

const RelatedBlogs = async ({ blogId, locale }) => {
  const t = locale === "ar" ? ar : en;
  const relatedBlogs = await getRelatedBlogs(blogId);
  return (
    <>
      <section className="py-8 max-w-7xl mx-auto px-6 2xl:px-0">
        <div>
          <div className="text-[18px] md:text-[32px] font-medium text-[#063046] pb-3">
            {t.relatedBlogs}
          </div>
          <div className="items grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <Link
                key={blog.documentId}
                href={`/${locale}/blog/${blog.documentId}`}
                className="rounded-lg p-3 shadow-lg relative"
              >
                <div className="mb-3">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-lg h-[250px] w-full object-cover"
                  />
                </div>
                <div className="mb-4">
                  <h2 className="pb-3 text-[#333D51] font-medium">
                    {blog.title}
                  </h2>
                  <p>{blog.description}</p>
                </div>
                <div className="font-medium  text-[#727580] mb-16">
                  <div className="absolute bottom-0 -left-3 ltr:left-3 w-full py-4  border-t-2 border-gray-100 ">
                    5/5/2023
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
