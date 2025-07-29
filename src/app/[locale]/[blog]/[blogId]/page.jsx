import React from "react";
import BlogContentIntroSection from "./_components/BlogContentIntroSection";
import BlogMainContentSection from "./_components/BlogMainContentSection";
import BlogTagsAndShareSection from "./_components/BlogTagsAndShareSection";
import RelatedBlogs from "./_components/RelatedBlogs";
import { getBlogById } from "@/lib/api/collections";
import { notFound } from "next/navigation";

const BlogDetails = async ({ params }) => {
  const resolvedParams = await params;
  const { locale, blogId } = resolvedParams;

  try {
    // Fetch blog data
    const blog = await getBlogById(blogId);

    // If blog doesn't exist, show 404
    if (!blog || !blog.id) {
      notFound();
    }

    return (
      <>
        <BlogContentIntroSection blog={blog} locale={locale} />
        <BlogMainContentSection blog={blog} locale={locale} />
        <BlogTagsAndShareSection blog={blog} locale={locale} />
        <RelatedBlogs blogId={blogId} locale={locale} />
      </>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
};

export default BlogDetails;
