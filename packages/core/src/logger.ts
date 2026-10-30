import debug from 'debug'

const coreLog = debug('core')

export function logger(name: string) {
  const landingLog = coreLog.extend(name)

  landingLog('init')
  return landingLog
}

export default coreLog
