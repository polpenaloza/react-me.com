// https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
/** @type {import("next").NextConfig} */
import nextConfig from '@workspace/config/next.config'

await import('./src/env.js')

export default nextConfig
