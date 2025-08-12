import React from "react";
import BlogsList from "./_components/BlogsList";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "المقالات" : "Blogs",
  };
}

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
