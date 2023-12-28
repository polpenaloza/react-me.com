import { mdiLogout } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconLogout(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon logout' path={mdiLogout} />
}
