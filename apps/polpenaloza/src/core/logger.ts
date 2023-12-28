import debug from 'debug'

export function logger(name: string) {
  const coreLog = debug('pol')
  const mainLog = coreLog.extend(name)

  mainLog('init')
  return mainLog
}
