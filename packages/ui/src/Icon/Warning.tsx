import { mdiAlert } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconWarning(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon alert' path={mdiAlert} />
}
