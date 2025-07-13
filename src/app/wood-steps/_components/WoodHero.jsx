import Image from "next/image";
import React from "react";

const WoodHero = () => {
  return (
    <>
      {/* pb-60 */}
      <section className=" relative bg-white   ">
        <div className="px-6  bg-[url('/assets/whale-hero-bg.png')]     md:h-[100vh] bg-cover bg-center">
          <div className="max-w-7xl mx-auto py-14">
            <div className=" text-center mb-8 md:mb-24">
              <h1 className="text-xl md:text-[40px] font- pb-6">
                حكاية تبدأ من الخشب... وتنتهي بتحفة
              </h1>
              <p className="text-sm md:text-2xl font text-[#586675]">
                في روز وود، لا نقدّم منتجًا فحسب، بل نُقدم تجربة متكاملة تبدأ من
                اختيار الخشب وتنتهي بين يديك. نحن نؤمن أن كل قطعة يجب أن تعكس
                جمال الطبيعة، ودقة الصنعة، واهتمامًا حقيقيًا بالتفاصيل, كل منتج
                من رووز وود يعكس شغفنا بالحِرَف اليدوية والدقة في كل مرحلة من
                مراحل التصنيع.
              </p>
            </div>
            <div className="relative pb-66 md:pb-24">
              <div className="   w-[56px] h-[56px] md:w-[104px] md:h-[104px] flex   rounded-2xl bg-white absolute top-0 left-10 rotate-[-30deg]">
                <Image
                  src="/assets/whale-earth.png"
                  alt=""
                  width={100}
                  height={100}
                  className="rotate-[30deg]"
                />
              </div>

              <div className="  flex w-[56px] h-[56px] md:w-[104px] md:h-[104px] rounded-2xl bg-white absolute top-0 right-10 rotate-[30deg]">
                <Image
                  src="/assets/whale-ship.png"
                  alt=""
                  width={100}
                  height={100}
                  className="rotate-[-30deg]"
                />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="flex w-full justify-center overflow-hidden absolute bottom-[-30px] md:bottom-[-180px] pt-16  gap-8     ">
          <div className=" shrink-0">
            <Image
              src="/assets/whale-hero(1).png"
              alt=""
              width={100}
              height={100}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
            />
          </div>
          <div className="mt-[-60px]  shrink-0  ">
            <Image
              src="/assets/whale-hero(2).png"
              alt="w-[400px] h-[365px]"
              width={100}
              height={100}
              className=" w-[256px] h-[252px] md:w-[400px] md:h-[381px] rounded-3xl"
            />
          </div>
          <div className=" shrink-0">
            <Image
              src="/assets/whale-hero(3).png"
              alt=""
              width={100}
              height={100}
              className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
            />
          </div>
        </div>
        {/*  */}
      </section>
    </>
  );
};

export default WoodHero;
