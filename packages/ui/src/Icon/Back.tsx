import { mdiChevronLeft } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconBack(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon back' path={mdiChevronLeft} />
}
