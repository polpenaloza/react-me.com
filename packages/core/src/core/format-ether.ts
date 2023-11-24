import { formatEther as formatter } from 'viem'

import { logger } from '../logger'
import { formatNumber } from './format-number'

const log = logger('formatEther')

export const formatEther = (value?: string, decimals = 3) => {
  if (typeof value !== 'string') {
    log('formatEther: value is not a string', value)

    return Number(0).toFixed(decimals)
  }

  const formatted = formatter(BigInt(String(value)))

  return formatNumber(formatted, decimals)
}
