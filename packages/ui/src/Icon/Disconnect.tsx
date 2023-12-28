import { mdiPower } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconDisconnect(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon disconnect' path={mdiPower} />
}
