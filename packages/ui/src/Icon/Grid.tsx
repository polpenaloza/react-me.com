import { mdiViewGrid } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconGrid(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon grid' path={mdiViewGrid} />
}
