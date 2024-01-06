/** @type {import('next').NextConfig} */
import config from '@workspace/config/next.config.js'

await import('@workspace/server/src/env.js')

export default config
