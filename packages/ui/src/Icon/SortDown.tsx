import { mdiTriangleDown } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSortDown(props: Omit<iBaseIconProps, 'path'>) {
  const { iconSize } = props
  const customIconSize = iconSize ?? 6

  return (
    <BaseIcon
      {...props}
      iconSize={customIconSize}
      aria-label='icon sort down'
      path={mdiTriangleDown}
    />
  )
}
