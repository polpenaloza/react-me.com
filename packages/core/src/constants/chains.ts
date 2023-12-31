export const DEFAULT_LIMIT = 50
export const WINDOW_MS = 10 * 60 * 1000

export const MAINNET = 'mainnet'
export const TESTNET = 'testnet'

export const ETHEREUM = 'homestead'
export const ARBITRUM = 'arbitrum'
export const POLYGON = 'polygon'

export const GOERLI = 'goerli'
export const LOCALHOST = 'foundry'

export const PRODUCTION_NETWORKS = [
  { key: ETHEREUM, value: 'Ethereum' },
  { key: ARBITRUM, value: 'Arbitrum' },
  { key: POLYGON, value: 'Polygon' },
]

export const TEST_NETWORKS = [
  { key: GOERLI, value: 'Goerli' },
  { key: LOCALHOST, value: 'Foundry' },
]

enum NETWORKS {
  'mainnet' = MAINNET,
  'testnet' = TESTNET,
}

export function getNetworks(network?: string) {
  switch (network) {
    case NETWORKS.mainnet:
      return PRODUCTION_NETWORKS
    case NETWORKS.testnet:
      return TEST_NETWORKS
    default:
      return TEST_NETWORKS
  }
}
