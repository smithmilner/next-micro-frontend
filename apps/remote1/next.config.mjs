import { NextFederationPlugin } from '@module-federation/nextjs-mf';


const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    host: `host@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
}

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
          './RemoteUserComponent': './components/RemoteUserComponent.tsx'
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
        remotes: remotes(isServer),
      })
    );

    return config;
  },
};

export default nextConfig;
