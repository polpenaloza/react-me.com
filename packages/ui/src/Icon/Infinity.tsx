import { mdiInfinity } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconInfinity(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon infinity' path={mdiInfinity} />
}
