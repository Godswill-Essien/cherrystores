/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rivon-demo.myshopify.com',
            
          },
        ],
      },
};

export default nextConfig;
