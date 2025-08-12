import React from "react";
import WhaleHero from "./_components/WhaleHero";
import GlobalService from "./_components/GlobalService";
import LocalService from "./_components/LocalService";
import { fetchWhaleSalePage } from "@/lib/api/cms";

export async function generateMetadata({ params }) {
  const { locale } =await params;
  return {
    title: locale === "ar" ? "الجملة والتصدير" : "Wholesale",
    description: "رووز وود شريكك التجاري الموثوق – محليًا ودوليًا",
  };
}

const WhaleSale = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const data = await fetchWhaleSalePage();
  return (
    <>
      <WhaleHero hero={data.hero} />
      <GlobalService global={data.global} locale={locale} />
      <LocalService local={data.local} locale={locale} />
    </>
  );
};

export default WhaleSale;
