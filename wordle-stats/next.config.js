/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["platform.slack-edge.com"],
    loader: process.env.LOCAL ? undefined : "custom",
  },
};

module.exports = nextConfig;
