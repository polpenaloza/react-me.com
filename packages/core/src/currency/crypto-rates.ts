import { currencyRenderer } from './currency-render'
import { formatEther } from './format-ether'

const convert = {
  ETH: {
    USD(param: string | number) {
      const value =
        typeof param === 'number' ? param : Number(formatEther(param)) * 1892.64

      return currencyRenderer(value, 2)
    },
  },
}

export function cryptoExchangeRate({
  amount,
  symbol,
}: {
  amount: string | number
  symbol?: string
}): string {
  if (!amount || !symbol) return '--'
  try {
    switch (symbol) {
      case 'ETH':
      case 'WETH':
        return convert.ETH.USD(amount)
      default:
        return String(amount)
        break
    }
  } catch (error) {
    return '--'
  }
}
