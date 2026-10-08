import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow Try Live / cloud desktop proxy hosts to load Next.js HMR assets
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
