import { mdiClose } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconClose(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon close' path={mdiClose} />
}
