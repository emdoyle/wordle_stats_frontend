/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["platform.slack-edge.com"],
  },
};

module.exports = nextConfig;
