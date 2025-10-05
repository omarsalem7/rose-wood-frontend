"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Play, X, Loader2 } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import Image from "next/image";

const VideoSection = ({ videoData }) => {
  const { openModal } = useModal();
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const videoRef = useRef(null);

  const handlePlayClick = useCallback(() => {
    setIsLoading(true);
    setLoadProgress(0);
    openModal(createVideoModalContent(), { type: "video" });
  }, [openModal]);

  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
      setHasVideoLoaded(true);
      // Auto-play the video when it's loaded
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        // If autoplay fails, user can still click play manually
      });
    }
  }, []);

  // Track loading progress
  const handleProgress = useCallback(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadProgress(progress);
        }
      }
    }
  }, []);

  // Handle video click to toggle mute
  const handleVideoClick = useCallback(() => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  }, [isMuted]);

  const handleVideoError = useCallback(() => {
    setIsLoading(false);
    console.error("Video failed to load");
  }, []);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} دقائق`;
  };

  const createVideoModalContent = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="text-white text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
              <p className="text-sm">Loading video...</p>
              {loadProgress > 0 && (
                <div className="w-48 bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${loadProgress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          controls
          preload="metadata"
          autoPlay
          muted={isMuted}
          onLoadedMetadata={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={() => setIsLoading(false)}
          onProgress={handleProgress}
          onWaiting={() => setIsLoading(true)}
          onCanPlayThrough={() => setIsLoading(false)}
          src={videoData.video}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  return (
    <section className="relative my-8  h-[70vh] md:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={videoData.thumbnail}
          alt="rosewood thumbnail"
          fill
          className="object-cover"
          priority={false}
          sizes="100vw"
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
            className="text-sm md:text-[24px] text-center max-w-3xl leading-relaxed font-alexandria"
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
            disabled={isLoading}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-[#ffffff55] backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 size={32} className="text-white animate-spin" />
            ) : (
              <Play
                size={32}
                className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                fill="white"
              />
            )}
          </button>
        </div>

        {/* Bottom Section - Duration */}
        <div
          className="flex  items-center justify-center gap-2 text-sm font-alexandria"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <Image
            src="/icons/time.svg"
            alt="clock"
            width={20}
            height={20}
            className="opacity-80"
          />
          <span className="md:text-xl text-sm">
            {duration > 0 ? formatDuration(duration) : "3 دقائق"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
