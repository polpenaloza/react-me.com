import sugarAbbreviate from 'sugar/number/abbr'

export const formatNumber = (value: number | bigint | string, decimals = 3) => {
  const formattedNumber = Number(value)

  if (
    isNaN(formattedNumber) ||
    typeof formattedNumber !== 'number' ||
    formattedNumber === 0
  )
    return '--'
  return sugarAbbreviate(formattedNumber, decimals).toUpperCase()
}

export default formatNumber
