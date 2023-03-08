/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imoveis-upload.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
