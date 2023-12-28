import { mdiBell } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconBell(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon bell' path={mdiBell} />
}
