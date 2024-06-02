/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.test.cyberia.studio",
        port: "",
      },
    ],
  },
};

export default nextConfig;
