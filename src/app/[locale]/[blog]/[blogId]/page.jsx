import React from "react";
import BlogContentIntroSection from "./_components/BlogContentIntroSection";
import BlogMainContentSection from "./_components/BlogMainContentSection";
import BlogTagsAndShareSection from "./_components/BlogTagsAndShareSection";
import RelatedBlogs from "./_components/RelatedBlogs";
import { getBlogById } from "@/lib/api/collections";

const BlogDetails = async ({ params }) => {
  const resolvedParams = await params;
  const { locale, blogId } = resolvedParams;

  // Fetch blog data
  const blog = await getBlogById(blogId);
  console.log("sss", blog);

  return (
    <>
      <BlogContentIntroSection blog={blog} locale={locale} />
      <BlogMainContentSection blog={blog} locale={locale} />
      <BlogTagsAndShareSection blog={blog} locale={locale} />
      <RelatedBlogs blog={blog} locale={locale} />
    </>
  );
};

export default BlogDetails;
