import { formatNumber } from './format-number'

export function formatPercentage(value: number, total: number) {
  const pct = (value * 100) / total

  return `${formatNumber(pct)}%`
}
