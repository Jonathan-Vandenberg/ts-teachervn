/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "http://localhost:3000"],
    loader: "custom",
    path: "/",
  },
};

module.exports = nextConfig;
