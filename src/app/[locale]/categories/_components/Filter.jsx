"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import { getCatalogUrl } from "@/lib/api/cms";

const Filter = ({ onFilter = () => {}, isCategoryDownload = false }) => {
  const params = useParams();
  const locale = params.locale;
  const t = locale === "ar" ? ar : en;
  const [search, setSearch] = useState("");
  const debounceRef = useRef();
  const inputRef = useRef();
  const [catalogUrl, setCatalogUrl] = useState("");

  useEffect(() => {
    if (isCategoryDownload) {
      getCatalogUrl().then((url) => setCatalogUrl(url));
    }
  }, [isCategoryDownload]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current && window.innerWidth > 800) {
      inputRef.current.focus();
    }
  }, []);

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
      <section className="p-6 flex-grow">
        <div className="max-w-7xl mx-auto border-t border-gray-300 relative">
          <span className="absolute left-0 top-0  w-1.5 h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <span className="absolute right-0 top-0 w-1.5  h-1.5 bg-gray-400 rounded-full -translate-y-1/2"></span>
          <div className="text-center text-[18px] md:text-[32px] font-medium py-5">
            <h1>{t.categoriesTitle}</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="items flex justify-between items-center gap-2 md:gap-6"
          >
            <div
              className="w-[80%] py-2 rounded-full px-2 flex items-center"
              style={{ backgroundColor: "#FFF8F6" }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full outline-0 px-2"
                style={{ backgroundColor: "#FFF8F6" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Button
                type="button"
                className=" text-[#5F361F]  cursor-pointer"
                onClick={() => onFilter(search)}
              >
                {t.filterButton}
                <SlidersHorizontal />
              </Button> */}
            </div>

            {isCategoryDownload && (
              <>
                <a
                  href={catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 flex items-center justify-center  bg-white min-w-48 cursor-pointer rounded-full border border-primary-900 text-primary-900"
                >
                  {t.downloadAllProducts}
                </a>
                <div className="">
                  <Button
                    type="submit"
                    className="bg-[#5F361F] min-w-48 cursor-pointer rounded-full text-white"
                  >
                    {t.searchButton}
                  </Button>
                </div>
              </>
            )}
            {!isCategoryDownload && (
              <div className="w-[20%]">
                <Button
                  type="submit"
                  className="bg-[#5F361F] cursor-pointer rounded-full text-white w-full"
                >
                  {t.searchButton}
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Filter;
