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
    domains: [
      'lh3.googleusercontent.com',
      'googleusercontent.com',
      'google.com',
    ],
  },
  output:
    process.env.NEXT_PUBLIC_UNOPTIMIZE_IMAGE === 'false'
      ? 'export'
      : 'standalone',
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ['@workspace/ui'],
  typescript: {
    ignoreBuildErrors: Boolean(process.env.IGNORE_TYPECHECK),
  },
})

module.exports = nextConfig
