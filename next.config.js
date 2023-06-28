/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   
    domains: ['cdn.pixabay.com', 'upload.wikimedia.org', 'tastesbetterfromscratch.com', 'photos.google.com', 'www.cvent-assets.com', 'www.publicdomainpictures.net', 'images.pexels.com'], // Add the domains you want to accept
  },
};

module.exports = nextConfig;