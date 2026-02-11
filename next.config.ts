import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

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

const withNextIntl = createNextIntlPlugin();
// export default nextConfig;
export default withNextIntl(nextConfig);

