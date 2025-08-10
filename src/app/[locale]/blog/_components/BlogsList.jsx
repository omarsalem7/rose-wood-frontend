"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fetchBlogsHomePage } from "@/lib/api/collections";
// Reuse Filter and Pagination if available, otherwise create simple versions below
import Filter from "../../products/_components/Filter";
import Pagination from "../../products/_components/Pagination";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const PAGE_SIZE = 12;

const BlogSkeleton = () => (
  <div className="item bg-white shadow-lg rounded-2xl w-full flex flex-col items-center gap-4 p-8 animate-pulse min-h-[350px]">
    <div className="bg-gray-200 rounded-full w-[160px] h-[100px] mt-4 mb-6" />
    <div className="bg-gray-200 rounded h-7 w-2/3 mb-2" />
    <div className="bg-gray-100 rounded h-4 w-1/2" />
  </div>
);

const BlogsList = ({ locale }) => {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
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
    } catch (e) {
      setBlogs([]);
      setTotalCount(0);
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
      <div data-aos="fade-down" data-aos-duration="800">
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
          ) : blogs.length === 0 ? (
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
          ) : (
            <>
              <div className="items py-2 grid grid-cols-1 lg:grid-cols-3  gap-6">
                {blogs.map((blog, index) => (
                  <Link
                    href={`/${locale}/blog/${blog.id}`}
                    key={blog.id}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                                         className="item bg-white shadow-lg rounded-2xl w-full flex flex-col items-center gap-4 p-4 md:p-8 transition-shadow hover:shadow-xl min-h-fit md:min-h-[300px]"
                  >
                                         <div className="w-full rounded-lg -mx-4 md:-mx-8 mb-2 h-48 overflow-hidden">
                       <Image
                         src={blog.image}
                         alt={blog.title}
                         width={0}
                         height={0}
                         sizes="100vw"
                         className="w-full h-full object-cover drop-shadow-md"
                       />
                     </div>
                    <h2 className="text-xl font-semibold text-[#223132] text-center mb-2">
                      {blog.title}
                    </h2>
                    <span className="text-base text-[#7B8B8E] text-center mb-2">
                      {blog.description}
                    </span>
                    <span className="text-xs text-gray-400 text-center">
                      {new Date(blog.date).toLocaleDateString(locale)}
                    </span>
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
          )}
        </div>
      </section>
    </>
  );
};

export default BlogsList;