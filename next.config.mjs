/** @type {import('next').NextConfig} */
const nextConfig = {
      compiler: {
    removeConsole: true,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
