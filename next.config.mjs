/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    suppressHydrationWarning: true, // Use with caution
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "your-production-domain.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
