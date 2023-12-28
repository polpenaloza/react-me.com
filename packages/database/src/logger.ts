import debug from 'debug'

const coreLog = debug('fluidnft:db')
const isEnabled = process.env.DEBUG || process.env.NEXT_PUBLIC_DEBUG

if (!isEnabled) {
  coreLog.enabled = false
}

export const logger = (name: string) => {
  const serverLog = coreLog.extend(`${name}`)

  serverLog('init')
  return serverLog
}
