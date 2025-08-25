import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const SectorSection = ({ card, locale }) => {
  const t = locale === "ar" ? ar : en;
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
    <section className="py-14 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((item, idx) => (
          <Card
            key={item.id || idx}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={idx * 200}
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
                <h3 className="md:text-[24px] text-[18px] font-medium text-[#5F361F] mb-4 font-alexandria leading-relaxed">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-base font-semibold leading-relaxed mb-6 font-alexandria line-clamp-4">
                  {item.subTitle}
                </p>
              </div>
              <ul className="list-none text-start flex flex-col gap-4 text-gray-500">
                {item.list &&
                  item.list.map((li) => (
                    <li className="md:text-[18px] text-[14px]" key={li.id}>
                      {li.text}
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center md:gap-8 gap-4 md:mt-8 mt-6">
        <button className="bg-[#5F361F]  w-[180px] text-white md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          {t.viewAllProducts}
        </button>
        <button className="border w-[180px] border-gray-300 text-gray-700 md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          {t.contactUs}
        </button>
      </div>
    </section>
  );
};

export default SectorSection;
