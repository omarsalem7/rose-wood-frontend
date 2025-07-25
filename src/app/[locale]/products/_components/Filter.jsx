"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { SlidersHorizontal } from "lucide-react";
const Filter = ({ onFilter = () => {} }) => {
  const [search, setSearch] = useState("");
  const debounceRef = useRef();

  // Debounce effect
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onFilter(search);
    }, 400);
    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(search);
  };

  return (
    <>
      <section className="p-6  ">
        <div className="max-w-7xl mx-auto border-t border-gray-300 relative">
          <span className="absolute left-0 top-0 z-50 w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5 z-50 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <div className="text-center text-[32px] font-medium py-5">
            <h1>مـنتــجات روز وود</h1>
          </div>
          <form onSubmit={handleSubmit} className="items flex justify-between items-center gap-2 md:gap-6">
            <div className="w-[80%] rounded-full px-2 bg-[#FFF8F6]  flex ">
              <input
                type="text"
                placeholder="ابحث عن ما تريد هنا..."
                className="w-full outline-0 px-2"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button type="button" className=" text-[#5F361F]  cursor-pointer" onClick={() => onFilter(search)}>
                فلتر البحث
                <SlidersHorizontal />
              </Button>
            </div>
            <div className="w-[20%]">
              <Button type="submit" className="bg-[#5F361F] cursor-pointer rounded-full text-white w-full">
                ابحث
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Filter;
