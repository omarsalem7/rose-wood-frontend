import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GlobalService = () => {
  return (
    <>
      <section className="px-6  pt-30 md:pt-60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pb-8 ">
            <h2 className="font-medium text-2xl leading-12">
              نصدّر بثقة… ونتعامل باحتراف
            </h2>
            <p className="text-[#586675] text-lg">
              في رووز وود، نؤمن أن الشراكات الناجحة تبدأ من الثقة وتنمو بالجودة.
              سواء كنت عميلًا داخل مصر أو خارجها، نحرص على تقديم تجربة توريد
              سلسة، واضحة، ومبنية على التزام حقيقي.
            </p>
          </div>
          {/*  */}
          <div className="items flex flex-col-reverse gap-16 md:flex-row py-16">
            <div className="item w-full md:w-[50%] flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#1D252E]">
                نُصدّر منتجاتنا بثقة… من مصر إلى العالم
              </h3>
              <p className="text-lg text-[#586675]">
                في رووز وود، نُقدّم خدمات تصدير متكاملة تلبي متطلبات العملاء
                الدوليين بدقة واحترافية. جميع منتجاتنا مطابقة لمعايير التصدير
                العالمي من حيث الرطوبة، والتعقيم، والتغليف, نوفّر لك كل
                المستندات المطلوبة مثل شهادة المنشأ، شهادة الفوميجاشن، وقائمة
                التعبئة، بالإضافة إلى خدمة الشحن من الباب للباب, سواء كنت
                موزعًا، مستوردًا، أو صاحب سلسلة متاجر، نُقدّم لك تجربة تصدير
                سهلة، سريعة، وموثوقة.
              </p>
              <ul className="text-[#804524] text-lg flex flex-col gap-6 pb-6">
                <li>نُصدر منتجاتنا الخشبية إلى الخليج، أوروبا، وأفريقيا</li>
                <li>منتجاتنا مطابقة لمعايير الرطوبة، الفوميجاشن، والتغليف</li>
                <li>شحن من الباب للباب وتشمل الأوراق الرسمية</li>
                <li>
                  تصاميم مخصصة حسب السوق (أحجام – ألوان – تغليف – طباعة شعار)
                </li>
              </ul>
              <Button className="w-fit px-10 rounded-lg text-white bg-[#5A6E51] py-2">
                عرض سعر لطلب دولي
              </Button>
            </div>
            <div className=" relative item w-full md:w-[50%] h-[300px]  md:h-[480px] border border-gray-300 rounded-2xl">
              <Image
                src="/assets/whale-globalservice(1).png"
                alt=""
                width={100}
                height={100}
                className="w-[48%] md:w-[290px] md:h-[261px] absolute top-6 left-6 z-10"
              />
              <Image
                src="/assets/whale-globalservice(2).png"
                alt=""
                width={100}
                height={100}
                className="w-[48%] md:w-[290px] md:h-[261px]  absolute bottom-6 right-6 z-50"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalService;
