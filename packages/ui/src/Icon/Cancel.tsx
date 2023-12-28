import { mdiCancel } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconCancel(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon cancel' path={mdiCancel} />
}
