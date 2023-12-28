import { mdiChevronUp } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconChevronUp(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon chevron up' path={mdiChevronUp} />
  )
}
