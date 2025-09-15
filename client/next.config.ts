import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "haven-s3-images.s3.amazonaws.com", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
