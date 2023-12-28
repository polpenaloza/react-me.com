import { mdiCart } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconCart(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon cart' path={mdiCart} />
}
