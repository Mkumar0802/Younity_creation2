/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// next.config.js

module.exports = {
  images: {
    domains: ["images.unsplash.com", "img.freepik.com", "kmk.s7rtechnology.in"],
  },
};
