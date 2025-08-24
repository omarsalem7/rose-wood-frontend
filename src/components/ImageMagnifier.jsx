"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ImageMagnifier = ({
  src,
  alt,
  width,
  height,
  className = "",
  quality = 95,
  priority = false,
  zoomLevel = 1.5,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage position
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setMousePosition({ x: xPercent, y: yPercent });
  };

  const handleMouseDown = (e) => {
    if (isHovering) {
      setIsDragging(true);
      const rect = containerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - (mousePosition.x * rect.width) / 100,
        y: e.clientY - rect.top - (mousePosition.y * rect.height) / 100,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newX = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100;
      const newY = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100;

      // Constrain the position within bounds
      const constrainedX = Math.max(0, Math.min(100, newX));
      const constrainedY = Math.max(0, Math.min(100, newY));

      setMousePosition({ x: constrainedX, y: constrainedY });
    }
  };

  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-zoom-in ${className} ${
        isDragging
          ? "cursor-grabbing"
          : isHovering
          ? "cursor-grab"
          : "cursor-zoom-in"
      }`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-150 ease-out"
        style={{
          transform: isHovering
            ? `scale(${zoomLevel}) translate(${
                ((50 - mousePosition.x) * (zoomLevel - 1)) / zoomLevel
              }%, ${((50 - mousePosition.y) * (zoomLevel - 1)) / zoomLevel}%)`
            : "scale(1) translate(0%, 0%)",
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
