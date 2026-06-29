import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/test_ia",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
