/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      "via.placeholder.com",
      "pro2-bar-s3-cdn-cf6.myportfolio.com",
      "cdn.jsdelivr.net",
      "sa-east-1.graphassets.com",
      "media.graphassets.com",
    ].map((hostname) => ({ protocol: "https", hostname })),
  },
};

module.exports = nextConfig;
