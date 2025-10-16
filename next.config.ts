import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // leave empty if default (80)
        pathname: '/**', // allow all paths
      },
    ],
  },
};

export default nextConfig;
