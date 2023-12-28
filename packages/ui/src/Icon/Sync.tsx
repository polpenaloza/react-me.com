import { mdiSync } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSync(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon sync' path={mdiSync} />
}
