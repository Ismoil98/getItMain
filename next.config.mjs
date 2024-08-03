/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          unoptimized: true,
          disableStaticImages: true,
          domains: [],
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.getter.uz',
            },
          ],
          
        },
      
};

export default nextConfig;
