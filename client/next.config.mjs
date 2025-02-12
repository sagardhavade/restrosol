/** @type {import('next').NextConfig} */
//const nextConfig = {};

const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'], // Add Cloudinary domain to the whitelist
    },
  };

export default nextConfig;
