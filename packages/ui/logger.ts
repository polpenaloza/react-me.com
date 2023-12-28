import coreLog from '@workspace/core-js/src/logger'

export function logger(name: string) {
  const uiLog = coreLog.extend(`ui:${name}`)

  uiLog('init')
  return uiLog
}
