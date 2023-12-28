import { mdiDotsHexagon } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconDotsHexagon(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon dots hexagonal'
      path={mdiDotsHexagon}
    />
  )
}
