/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "image.tmdb.org",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
