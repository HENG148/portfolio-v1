import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // replace with your specific domain e.g. "res.cloudinary.com"
      },
    ],
  },
};

export default nextConfig;
