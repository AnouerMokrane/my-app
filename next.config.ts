import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "peach-fashionable-sawfish-519.mypinata.cloud",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
