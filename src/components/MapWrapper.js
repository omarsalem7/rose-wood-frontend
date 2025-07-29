"use client";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(
  () => import("../app/[locale]/contact/_components/ContactLocation"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    ),
  }
);

export default function MapWrapper() {
  return <MapComponent />;
}
