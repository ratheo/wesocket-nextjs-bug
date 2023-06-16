/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/websocket",
      destination: "/Rewrite",
    },
  ],
};

module.exports = nextConfig;
