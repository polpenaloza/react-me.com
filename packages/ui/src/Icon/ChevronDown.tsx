import { mdiChevronDown } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconChevronDown(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon chevron down' path={mdiChevronDown} />
  )
}
