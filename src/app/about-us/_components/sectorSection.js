import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const SectorSection = () => {
  return (
    <section className="py-20 px-6 mx-auto container">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#F9F7F2] p-6 rounded-2xl border-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Article Image */}
          <div className="overflow-hidden">
            <Image
              src="/assets/export.png"
              alt="test"
              width={400}
              height={200}
              className="w-full rounded-2xl h-full max-h-[250px] object-cover transition-transform duration-300"
            />
          </div>
          <CardContent className="py-6 px-0">
            <div className="text-center">
              <h3 className="text-xl font-medium text-[#5F361F] mb-4 font-alexandria leading-relaxed">
                التصدير الدولي
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-alexandria line-clamp-4">
                نخدم عملاء من خارج مصر، ونوفر
              </p>
            </div>
            <ul className="list-none flex flex-col gap-4 text-gray-500">
              <li>متاجر التجزئة</li>
              <li>شركات التوزيع بالجملة</li>
              <li>المطاعم والفنادق</li>
              <li>العلامات التجارية الخاصة (OEM)</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-[#F9F7F2] p-6 rounded-2xl border-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Article Image */}
          <div className="overflow-hidden">
            <Image
              src="/assets/about2.png"
              alt="test"
              width={400}
              height={200}
              className="w-full rounded-2xl h-full max-h-[250px] object-cover transition-transform duration-300"
            />
          </div>
          <CardContent className="py-6 px-0">
            <div className="text-center">
              <h3 className="text-xl font-medium text-[#5F361F] mb-4 font-alexandria leading-relaxed">
                الشراكات والتوريد
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-alexandria line-clamp-4">
                في نطاق الشراكات والتوريد نقوم بخدمة
              </p>
            </div>
            <ul className="list-none flex flex-col gap-4 text-gray-500">
              <li>متاجر التجزئة</li>
              <li>شركات التوزيع بالجملة</li>
              <li>المطاعم والفنادق</li>
              <li>العلامات التجارية الخاصة (OEM)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4 justify-center mt-8">
        <button className="bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
          عــرض كل المـنتجات
        </button>
        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          تواصل معنا
        </button>
      </div>
    </section>
  );
};

export default SectorSection;
