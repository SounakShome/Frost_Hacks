/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i0.wp.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'spacepolicyonline.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'www.nasaspaceflight.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'image.cnbcfm.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'europeanspaceflight.com',
            port: '',
          },
          
        ]
      },
};

export default nextConfig;
