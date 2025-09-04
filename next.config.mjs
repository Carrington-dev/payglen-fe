/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ✅ Allows production builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};



export default nextConfig;
