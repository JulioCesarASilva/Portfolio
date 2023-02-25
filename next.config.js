/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', "pro2-bar-s3-cdn-cf6.myportfolio.com", "cdn.jsdelivr.net"],
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
        protocol: "https"
      }
    ]
  },
}

module.exports = nextConfig
