import { mdiCheck } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconCheck(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon check' path={mdiCheck} />
}
