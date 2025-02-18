// /** @type {import('next').NextConfig} */
// //const nextConfig = {};

// const nextConfig = {
//     images: {
//       domains: ['res.cloudinary.com'], // Add Cloudinary domain to the whitelist
//     },
//   };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
