// https://sugarjs.com/docs/#/Accessors

export function formatNumber(
  value: number | bigint | string | undefined,
  decimals = 3
): string {
  if (!value) return Number(0).toFixed(decimals)
  const formattedNumber = Number(value)

  if (isNaN(formattedNumber) || typeof formattedNumber !== 'number') return '0'

  return formattedNumber.toFixed(decimals)
}
