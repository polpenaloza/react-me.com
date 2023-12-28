import sugarAbbreviate from 'sugar/number/abbr'

export const currencyRenderer = (value: number | string, decimals = 2) => {
  const formattedNumber = Number(value)

  if (
    isNaN(formattedNumber) ||
    typeof formattedNumber !== 'number' ||
    formattedNumber === 0
  )
    return '--'
  return `$ ${sugarAbbreviate(formattedNumber, decimals).toUpperCase()}`
}
