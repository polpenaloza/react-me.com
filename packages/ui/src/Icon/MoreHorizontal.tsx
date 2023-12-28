import { mdiDotsVertical } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconMoreHorizontal(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon more' path={mdiDotsVertical} />
}
