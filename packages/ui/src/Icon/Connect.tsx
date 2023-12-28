import { mdiWallet } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconConnect(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon connect' path={mdiWallet} />
}
