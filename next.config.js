/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  // exportPathMap: function () {
  //   return {
  //     '/': { pages: '/' },
  //   }
  // },
}

module.exports = nextConfig
