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
export async function fetchWhyUs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/home-page?populate[whyUs][populate]=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch hero data");
  const json = await res.json();
  const respone = json.data.whyUs;
  return {
    title: respone.title,
    description: respone.description,
    images: [
      {
        id: respone.images[0].id,
        img: getFullImageUrl(respone.images[0]?.url),
        alt: respone.images[0]?.name,
      },
      {
        id: respone.images[1].id,
        img: getFullImageUrl(respone.images[1]?.url),
        alt: respone.images[1]?.name,
      },
      {
        id: respone.images[2].id,
        img: getFullImageUrl(respone.images[2]?.url),
        alt: respone.images[2]?.name,
      },
    ],
    buttons: respone.buttons,
    list: respone.listPoints,
  };
}
