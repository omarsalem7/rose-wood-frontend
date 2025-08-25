"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fetchBlogsHomePage } from "@/lib/api/collections";
// Reuse Filter and Pagination if available, otherwise create simple versions below
import Filter from "../../products/_components/Filter";
import Pagination from "../../products/_components/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import BlogSkeleton from "@/components/BlogSkeleton";
import SafeImage from "@/components/SafeImage";

const PAGE_SIZE = 12;

const BlogsList = ({ locale }) => {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Start with loading true
  const [hasLoaded, setHasLoaded] = useState(false); // Track if initial load is complete
  const t = locale === "ar" ? ar : en;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  const fetchBlogs = async (page = 1, searchValue = "") => {
    setLoading(true);
    try {
      const res = await fetchBlogsHomePage({
        page,
        pageSize: PAGE_SIZE,
        search: searchValue,
      });
      setBlogs(res.items || []);
      setTotalCount(res.totalCount || 0);
      setHasLoaded(true); // Mark that initial load is complete
    } catch (e) {
      setBlogs([]);
      setTotalCount(0);
      setHasLoaded(true); // Mark that initial load is complete even on error
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(currentPage, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (searchValue) => {
    setSearch(searchValue);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <Filter onFilter={handleFilter} />
      </div>
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="py-4"
          >
            {t.allBlogs} ({totalCount})
          </div>
          {loading ? (
            <div className="items py-8 grid grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          ) : hasLoaded && blogs.length === 0 ? (
            <div className="py-16 pb-24 text-center">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <img
                    src="/assets/noProducts.png"
                    alt="No blogs found"
                    className="w-32 h-32 mx-auto opacity-60"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {t.noBlogsFound}
                </h3>
              </div>
            </div>
          ) : hasLoaded && blogs.length > 0 ? (
            <>
              <div className="items py-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <Link
                    href={`/${locale}/blog/${blog.id}`}
                    key={blog.id}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                  >
                    <Card
                      className="bg-[#f2ece9ce] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={300 + index * 100}
                    >
                      {/* Article Image */}
                      <div className="aspect-video p-3 overflow-hidden flex-shrink-0">
                        <SafeImage
                          src={blog.image}
                          alt={blog.title}
                          width={200}
                          height={200}
                          className="w-full rounded-xl h-full object-cover"
                          fallbackClassName="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center"
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
                            {new Date(blog.date).toLocaleDateString(locale)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default BlogsList;
