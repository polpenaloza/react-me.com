import { mdiAccountCircleOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconAccount(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon account'
      path={mdiAccountCircleOutline}
    />
  )
}
