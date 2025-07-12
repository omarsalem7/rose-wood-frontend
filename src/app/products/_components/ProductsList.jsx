"use client";
import Image from "next/image";
import { useState } from "react";
import { productList } from "@/utils/data";
import Pagination from "./Pagination";
import Link from "next/link";

const ProductsList = () => {
  // const { products } = useProductsLogic();
  const [products, setProducts] = useState(productList);

  return (
    <>
      <section className=" px-6">
        <div className="max-w-7xl mx-auto">
          <div className="py-4">كل المنتجات (650 منتج)</div>
          <div className="items py-2 flex flex-col justify-between md:flex-row flex-wrap gap-4">
            {products.map((product) => (
              <Link href={`products/${product.id}`}
                key={product.id}
                className="item border border-gray-300 rounded w-full md:w-[30%] flex justify-center flex-col items-center gap-4 p-4"
              >
                <Image src={product.image} alt="" width={100} height={100} />
                <h2 className="text-2xl">{product.name}</h2>
                <span className="text-sm text-[#7B8B8E]">
                  {product.description}
                </span>
              </Link>
            ))}
          </div>
          {/*  */}
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default ProductsList;
