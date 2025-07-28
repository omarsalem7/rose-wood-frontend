/** @type {import('next').NextConfig} */

// Bundle analyzer configuration
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? (await import("@next/bundle-analyzer")).default({ enabled: true })
    : (config) => config;

const nextConfig = {
  reactStrictMode: true,
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
        hostname: "exuberant-smile-8788e41b5a.strapiapp.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "exuberant-smile-8788e41b5a.media.strapiapp.com",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Compression
  compress: true,
  // Optimize bundle size - only apply webpack config in production or when not using Turbopack
  webpack: (config, { dev, isServer }) => {
    // Only apply webpack optimizations in production or when not using Turbopack
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }

    // Handle SVG files - only add if not already present
    const svgRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    if (!svgRule) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
