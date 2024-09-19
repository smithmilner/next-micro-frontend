import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // specify exposed pages and components
          // './AboutUs': './pages/about-us.tsx',
          './ProductPage': './pages/product.tsx',
          // './SomeComponent': './components/someComponent.js'
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
      })
    );

    return config;
  },
};

export default nextConfig;
