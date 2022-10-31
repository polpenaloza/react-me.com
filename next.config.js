/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // exportPathMap: function () {
  //   return {
  //     '/': { pages: '/' },
  //   }
  // },
}

module.exports = nextConfig
