import { mdiCheckCircle } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconCheckCircle(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon check' path={mdiCheckCircle} />
}
