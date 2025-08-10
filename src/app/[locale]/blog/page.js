import React from "react";
import BlogsList from "./_components/BlogsList";

const Blogs = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <>
      <BlogsList locale={locale} />
    </>
  );
};

export default Blogs;
