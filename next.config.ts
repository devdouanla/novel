import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
       hostname: 'example.com', // 👈 ton domaine d'image externe
        port: '',
        pathname: '/**',
      },
      {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
    },
    {
      protocol: 'https',
      hostname: 'cdn.akknovel.com',
    },
    ],
  },
};

export default nextConfig;
