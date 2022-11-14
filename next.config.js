/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US',
  },
  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     ...defaultPathMap,
  //   }
  // },
}

module.exports = nextConfig
