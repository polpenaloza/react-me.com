import { mdiLightningBoltCircle } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconAction(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon action'
      path={mdiLightningBoltCircle}
    />
  )
}
