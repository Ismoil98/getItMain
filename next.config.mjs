/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.getter.uz',
            },
          ],
        },
      
};

export default nextConfig;
