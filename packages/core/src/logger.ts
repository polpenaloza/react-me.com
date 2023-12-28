import debug from 'debug'

const coreLog = debug('core')
const isEnabled = process.env.DEBUG || process.env.NEXT_PUBLIC_DEBUG

if (!isEnabled) {
  coreLog.enabled = false
}

export function logger(name: string) {
  const landingLog = coreLog.extend(name)

  landingLog('init')
  return landingLog
}

export default coreLog
