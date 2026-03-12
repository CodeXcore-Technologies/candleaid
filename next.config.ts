import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure image quality levels for optimization
    qualities: [75, 85],
  },
};

export default nextConfig;
