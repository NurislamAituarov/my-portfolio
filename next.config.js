/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['localhost', 'i.ytimg.com', 'nurislamaituarov.github.io'] },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    PROD_URL: process.env.REACT_PROD_URL,
  },
};

module.exports = nextConfig;
