import React from "react";

const Skeleton = ({ className, variant = "default", ...props }) => {
  if (variant === "article") {
    return (
      <div className={`bg-gray-100 rounded-xl p-4 ${className}`} {...props}>
        {/* Simple 3 lines without animation */}
        <div className="space-y-3">
          <div className="h-[200px] bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return <div className={`bg-gray-200 rounded-xl ${className}`} {...props} />;
};

export default Skeleton;
