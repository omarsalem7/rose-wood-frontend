import Image from "next/image";
import React from "react";
import { getRelatedBlogs } from "@/lib/api/collections";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import Link from "next/link";
function formatArabicDate(dateString) {
  const date = new Date(dateString);
  return ` ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} `;
}
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
          <div className="items grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((blog, index) => (
              <Link
                key={blog.documentId}
                href={`/${locale}/blog/${blog.documentId}`}
              >
                <Card
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={300 + index * 100}
                >
                  {/* Article Image */}
                  <div className="aspect-video p-3 overflow-hidden flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={200}
                      height={200}
                      className="w-full rounded-xl h-full object-cover"
                    />
                  </div>
                  <CardContent className="px-3 flex flex-col flex-grow gap-2">
                    {/* Article Title */}
                    <h3 className="text-xl font-medium text-gray-600 font-alexandria leading-relaxed flex-shrink-0">
                      {blog.title}
                    </h3>
                    {/* Article Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed font-alexandria line-clamp-4 flex-grow">
                      {blog.description}{" "}
                      <span className="font-medium underline">
                        ... {t.readMore}
                      </span>
                    </p>
                    {/* Article Meta */}
                    <hr className="p-[1px] bg-[#96979e24] mt-2" />
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span className="font-alexandria">
                        {formatArabicDate(blog.createdAt)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
