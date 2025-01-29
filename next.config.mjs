/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rivon-demo.myshopify.com',
            
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            
          },
        ],
      },
};

export default nextConfig;
