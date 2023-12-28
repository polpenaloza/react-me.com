import { mdiHome } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconHome(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon home' path={mdiHome} />
}
