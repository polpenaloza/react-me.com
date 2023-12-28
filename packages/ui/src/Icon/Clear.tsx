import { mdiCloseCircleOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconClear(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon clear' path={mdiCloseCircleOutline} />
  )
}
