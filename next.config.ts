import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  }
};

export default nextConfig;
