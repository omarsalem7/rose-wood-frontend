import Image from "next/image";
import React from "react";

const SafeImage = ({
  src,
  alt,
  fallback = "No image",
  fallbackClassName = "w-full h-full bg-gray-200 flex items-center justify-center",
  fallbackTextClassName = "text-gray-500 text-sm",
  className = "",
  style = {},
  showFallback = true,
  ...props
}) => {
  // Check if src is valid - handles null, undefined, empty string, and whitespace-only strings
  const isValidSrc = src && typeof src === "string" && src.trim() !== "";

  if (!isValidSrc) {
    // If showFallback is false, don't render anything
    if (!showFallback) {
      return null;
    }

    // Apply the same className and style to maintain layout consistency
    return (
      <div className={`${fallbackClassName} ${className}`} style={style}>
        <span className={fallbackTextClassName}>{fallback}</span>
      </div>
    );
  }

  return (
    <Image src={src} alt={alt} className={className} style={style} {...props} />
  );
};

export default SafeImage;
