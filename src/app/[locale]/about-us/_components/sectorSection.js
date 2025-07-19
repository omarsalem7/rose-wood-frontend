import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const SectorSection = ({ card }) => {
  console.log("omar card: ", card);
  const cards = card || [
    {
      title: "التصدير الدولي",
      subTitle: "نخدم عملاء من خارج مصر، ونوفر",
      image: "/assets/export.png",
      list: [
        { id: 1, text: "متاجر التجزئة" },
        { id: 2, text: "شركات التوزيع بالجملة" },
        { id: 3, text: "المطاعم والفنادق" },
        { id: 4, text: "العلامات التجارية الخاصة (OEM)" },
      ],
    },
    {
      title: "الشراكات والتوريد",
      subTitle: "في نطاق الشراكات والتوريد نقوم بخدمة",
      image: "/assets/about2.png",
      list: [
        { id: 1, text: "متاجر التجزئة" },
        { id: 2, text: "شركات التوزيع بالجملة" },
        { id: 3, text: "المطاعم والفنادق" },
        { id: 4, text: "العلامات التجارية الخاصة (OEM)" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 mx-auto container">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((item, idx) => (
          <Card
            key={item.id || idx}
            className="bg-[#F9F7F2] p-6 rounded-2xl border-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Article Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full rounded-2xl h-full max-h-[250px] object-cover transition-transform duration-300"
              />
            </div>
            <CardContent className="py-6 px-0">
              <div className="text-center">
                <h3 className="text-xl font-medium text-[#5F361F] mb-4 font-alexandria leading-relaxed">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-alexandria line-clamp-4">
                  {item.subTitle}
                </p>
              </div>
              <ul className="list-none flex flex-col gap-4 text-gray-500">
                {item.list &&
                  item.list.map((li) => <li key={li.id}>{li.text}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <div className="flex gap-4 justify-center mt-8">
        <button className="bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          عــرض كل المـنتجات
        </button>
        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          تواصل معنا
        </button>
      </div> */}
    </section>
  );
};

export default SectorSection;
