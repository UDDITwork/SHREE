import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siviacademy.in',
      },
    ],
  },
};

export default nextConfig;
