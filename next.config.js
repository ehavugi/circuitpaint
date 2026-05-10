const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/circuitpaint',
  assetPrefix: '/circuitpaint',
  outputFileTracingRoot: path.resolve(__dirname),
  images: { unoptimized: true },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
}

module.exports = nextConfig;
