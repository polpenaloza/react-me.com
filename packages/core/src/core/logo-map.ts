export function logosSource() {
  const ICON_LOGO_MAP: { [key: string]: string } = {
    eth: '/svg/eth-icon.svg',
    ETH: '/svg/eth-icon.svg',
    weth: '/svg/weth-icon.svg',
    WETH: '/svg/weth-icon.svg',
    'weth-light': '/svg/eth-icon-light.svg',
    'WETH-light': '/svg/eth-icon-light.svg',
    'USDC-light': '/svg/usdc-icon.svg',
    'usdc-light': '/svg/usdc-icon.svg',
    USDC: '/svg/usdc-icon.svg',
    usdc: '/svg/usdc-icon.svg',
    FLUID: '/svg/fluid-icon.svg',
    fluid: '/svg/fluid-icon.svg',
  }

  const map = new Map()

  Object.keys(ICON_LOGO_MAP).forEach((key: string) => {
    map.set(key, ICON_LOGO_MAP[key])
  })

  return { map }
}
