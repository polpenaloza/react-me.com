// https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
/** @type {import("next").NextConfig} */
import nextConfig from '@workspace/config/next.config'

await require('@workspace/server/src/env')

export default nextConfig
