/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'i.ibb.co', 'upload.wikimedia.org', 'images.app.goo.gl', 'photos.app.goo.gl','tastesbetterfromscratch.com', 'photos.google.com', 'www.publicdomainpictures.net', 'images.pexels.com', 'www.pexels.com'], // Add the domains you want to accept
  },
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;