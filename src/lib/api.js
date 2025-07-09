import { getFullImageUrl } from "./image";

export async function fetchHeroData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/home-page?populate[header][populate]=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch hero data");
  const json = await res.json();
  const header = json.data.header;
  return {
    title: header.title,
    subTitle: header.subTitle,
    imageUrl: getFullImageUrl(header.image?.formats?.large?.url),
  };
}
