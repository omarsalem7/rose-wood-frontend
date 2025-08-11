import React from "react";

export default function Loading() {
  return (
    <section className="px-6 py-4 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[40px] font-extrabold pb-7 bg-gray-200 rounded h-12 w-1/2 mx-auto" />
        <div className="items flex flex-col gap-6 md:flex-row mt-8">
          <div className="w-full md:w-[50%] bg-gray-200 rounded-lg h-96" />
          <div className="w-full md:w-[50%] bg-gray-200 rounded-lg h-96" />
        </div>
      </div>
    </section>
  );
}