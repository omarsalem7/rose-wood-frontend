"use client";
import React, { useState, useRef } from "react";
import { Play } from "lucide-react";

const VideoSection = ({ videoData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
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

  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl md:font-semibold text-center mb-6 font-alexandria">
          {videoData.title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl leading-relaxed font-alexandria">
          {videoData.description}
        </p>

        {/* Play Button */}
        <div className="mb-8">
          <button
            onClick={handlePlayClick}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-[#ffffff33] backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white border-opacity-50 hover:bg-opacity-30 transition-all duration-300 hover:scale-105"
          >
            <Play
              size={32}
              className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
              fill="white"
            />
          </button>
        </div>

        {/* Duration */}
        <div className="flex items-center space-x-2 text-sm font-alexandria">
          <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
          <span className="opacity-80">
            {duration > 0 ? formatDuration(duration) : "3 دقائق"}
          </span>
        </div>
      </div>

      {/* Video Modal (when playing) */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            {/* Real Video */}
            <video
              ref={videoRef}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              onLoadedMetadata={handleVideoLoad}
              src={videoData.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
