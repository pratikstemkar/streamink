/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "occ-0-4608-2164.1.nflxso.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img10.hotstar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "v3img.voot.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
