import { mdiPlusCircleOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconAddOutline(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon add oultine'
      path={mdiPlusCircleOutline}
    />
  )
}
