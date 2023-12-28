// https://sugarjs.com/docs/#/Accessors
import sugar from 'sugar'

export function currencyRenderer(value: number | string, decimals = 2) {
  const formattedNumber = Number(value)

  if (
    isNaN(formattedNumber) ||
    typeof formattedNumber !== 'number' ||
    formattedNumber === 0
  )
    return '--'
  return `$ ${sugar.Number.abbr(formattedNumber, decimals).toUpperCase()}`
}
