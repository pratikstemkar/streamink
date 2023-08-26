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
    ],
  },
};

module.exports = nextConfig;
