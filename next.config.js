/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   
    domains: ['cdn.pixabay.com', 'i.ibb.co', 'upload.wikimedia.org', 'tastesbetterfromscratch.com', 'photos.google.com', 'www.cvent-assets.com', 'www.publicdomainpictures.net', 'images.pexels.com'], // Add the domains you want to accept
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.webm$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

module.exports = nextConfig;