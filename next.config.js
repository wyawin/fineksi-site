/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
  },
  // Disable client-side navigation optimizations
  experimental: {
    appDir: true,
  },
  // Force full page reloads for navigation
}

module.exports = nextConfig