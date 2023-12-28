import { parseEther as parser } from 'viem'

export const parseEther = (value: string | number) => {
  typeof value === 'number' && (value = String(value))
  const parsed = parser(value)

  return parsed
}
