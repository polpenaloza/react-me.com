/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */

function getConfig(config) {
  return config
}

const nextConfig = getConfig({
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  /** run eslint as a separate task in CI */
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: Boolean(process.env.NEXT_PUBLIC_UNOPTIMIZE_IMAGE),
    domains: ['google.com'],
  },
  output:
    process.env.NEXT_PUBLIC_UNOPTIMIZE_IMAGE === 'false'
      ? 'export'
      : 'standalone',
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
  reactStrictMode: true,
  swcMinify: process.env.NODE_ENV === 'production',
  trailingSlash: true,
  transpilePackages: ['core', 'ui'],
  typescript: {
    ignoreBuildErrors: Boolean(process.env.IGNORE_TYPECHECK),
  },
})

module.exports = nextConfig
