import { mdiMenu } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconHamburgerMenu(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon menu' path={mdiMenu} />
}
