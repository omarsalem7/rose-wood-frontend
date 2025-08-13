import CategoryList from "./_components/CategoryList";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "التصنيفات" : "Categories",
  };
}
const Categories = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <>
      <CategoryList locale={locale} />
    </>
  );
};

export default Categories;
