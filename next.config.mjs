/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  }
};

export default nextConfig;
