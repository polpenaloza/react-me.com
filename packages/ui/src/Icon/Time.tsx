import { mdiClockOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconTime(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon time' path={mdiClockOutline} />
}
