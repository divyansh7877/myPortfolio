import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myPortfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
