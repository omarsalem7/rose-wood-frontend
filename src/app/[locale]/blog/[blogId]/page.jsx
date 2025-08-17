import BlogContentIntroSection from "./_components/BlogContentIntroSection";
import BlogMainContentSection from "./_components/BlogMainContentSection";
import BlogTagsAndShareSection from "./_components/BlogTagsAndShareSection";
import RelatedBlogs from "./_components/RelatedBlogs";
import { getBlogById, getBlogMetadata } from "@/lib/api/collections";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const { title, description } = await getBlogMetadata(blogId);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      images: [
        {
          url: "/assets/rose-h-logo.svg",
          width: 1200,
          height: 630,
          alt: "Rosewood Kitchenware",
        },
      ],
    },
    twitter: {
      title: title,
      description: description,
      card: "summary",
      images: ["/assets/rose-v-logo.svg"],
    },
  };
}

const BlogDetails = async ({ params }) => {
  const resolvedParams = await params;
  const { locale, blogId } = resolvedParams;

  // Validate blogId to prevent Chrome DevTools interference
  if (
    !blogId ||
    typeof blogId !== "string" ||
    blogId.includes("chrome") ||
    blogId.includes("devtools")
  ) {
    console.error("Invalid blogId:", blogId);
    notFound();
  }

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
};

export default BlogDetails;
