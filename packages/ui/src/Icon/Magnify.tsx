import { mdiMagnify } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconMagnify(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon zoom' path={mdiMagnify} />
}
