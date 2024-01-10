import debug from 'debug'

const coreLog = debug('server')
const isEnabled = process.env.DEBUG === 'true'

if (!isEnabled) {
  coreLog.enabled = false
}

export const logger = (name: string) => {
  const serverLog = coreLog.extend(`${name}`)

  serverLog('init')
  return serverLog
}
