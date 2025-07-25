import React from "react";
import WhaleHero from "./_components/WhaleHero";
import GlobalService from "./_components/GlobalService";
import LocalService from "./_components/LocalService";
import { fetchWhaleSalePage } from "@/lib/api/cms";

const WhaleSale = async () => {
  const data = await fetchWhaleSalePage();
  console.log(data)
  return (
    <>
      <WhaleHero hero={data.hero} />
      <GlobalService global={data.global} />
      <LocalService local={data.local} />
    </>
  );
};

export default WhaleSale;
