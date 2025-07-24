import React from "react";
import BlogContentIntroSection from "./_components/BlogContentIntroSection";
import BlogMainContentSection from "./_components/BlogMainContentSection";
import BlogTagsAndShareSection from "./_components/BlogTagsAndShareSection";
import RelatedBlogs from "./_components/RelatedBlogs";

const BlogDetails = () => {
  return (
    <>
      <BlogContentIntroSection />
      <BlogMainContentSection />
      <BlogTagsAndShareSection />
      <RelatedBlogs />
    </>
  );
};

export default BlogDetails;
