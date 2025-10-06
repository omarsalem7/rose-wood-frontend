"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobileProductsCarousel({ children }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.1}
      centeredSlides={false}
      style={{
        paddingLeft: "6vw",
        paddingRight: "6vw",
        paddingBottom: "30px",
      }}
      className="equal-height-swiper"
      breakpoints={{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="h-auto">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
