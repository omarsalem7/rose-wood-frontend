/** @type {import('next').NextConfig} */

// Bundle analyzer configuration
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? (await import("@next/bundle-analyzer")).default({ enabled: true })
    : (config) => config;

const nextConfig = {
  reactStrictMode: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react"],
    // Configure turbo properly for Next.js 15
    turbo:
      process.env.NODE_ENV === "development"
        ? {
            rules: {
              "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
              },
            },
          }
        : undefined,
  },

  // Image optimization
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
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression and optimization
  compress: true,

  // HTTP headers for better caching and MIME type handling
  async headers() {
    // Environment-specific CSP
    const isDev = process.env.NODE_ENV === "development";

    const cspDirectives = isDev
      ? {
          // Development: More permissive for localhost
          "default-src": ["'self'"],
          "script-src": [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            "https://va.vercel-scripts.com",
          ],
          "style-src": ["'self'", "'unsafe-inline'"],
          "font-src": ["'self'", "data:"],
          "img-src": ["'self'", "data:", "https:", "http://localhost:1337"],
          "connect-src": [
            "'self'",
            "https:",
            "http://localhost:1337",
            "ws://localhost:*",
          ],
          "media-src": ["'self'", "https:", "http://localhost:1337"],
        }
      : {
          // Production: More restrictive
          "default-src": ["'self'"],
          "script-src": [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            "https://va.vercel-scripts.com",
          ],
          "style-src": ["'self'", "'unsafe-inline'"],
          "font-src": ["'self'", "data:"],
          "img-src": ["'self'", "data:", "https:"],
          "connect-src": ["'self'", "https:"],
          "media-src": ["'self'", "https:"],
        };

    const cspValue = Object.entries(cspDirectives)
      .map(([key, values]) => `${key} ${values.join(" ")}`)
      .join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Environment-specific CSP
          {
            key: "Content-Security-Policy",
            value: cspValue,
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          // Ensure proper MIME types for static assets
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icons/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
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
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
