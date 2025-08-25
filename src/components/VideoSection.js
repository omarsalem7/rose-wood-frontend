"use client";
import React, { useState, useRef } from "react";
import { Play, X } from "lucide-react";
import { useModal } from "@/lib/ModalContext";

const VideoSection = ({ videoData }) => {
  const { openModal } = useModal();
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    openModal(createVideoModalContent(), { type: "video" });
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} دقائق`;
  };

  const createVideoModalContent = () => {
    return (
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        autoPlay
        onLoadedMetadata={handleVideoLoad}
        src={videoData.video}
      >
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <section className="relative my-8  h-[70vh] md:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={videoData.thumbnail}
          alt="rosewood thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000b5]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-white px-6 py-12">
        {/* Top Section - Title and Description */}
        <div className="text-center">
          {/* Title */}
          <h2
            className="text-[18px] md:text-[32px] font-medium text-center mb-4 font-alexandria"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {videoData.title}
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm md:text-[24px] font-normal text-center max-w-3xl leading-relaxed font-alexandria"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {videoData.description}
          </p>
        </div>

        {/* Center Section - Play Button */}
        <div
          className="flex-1 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <button
            onClick={handlePlayClick}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-[#ffffff55] backdrop-blur-sm rounded-full flex items-center justify-center  hover:bg-opacity-30 transition-all duration-300 hover:scale-105"
          >
            <Play
              size={32}
              className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
              fill="white"
            />
          </button>
        </div>

        {/* Bottom Section - Duration */}
        <div
          className="flex items-center justify-center space-x-2 text-sm font-alexandria"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
          <span className="opacity-80">
            {duration > 0 ? formatDuration(duration) : "3 دقائق"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
