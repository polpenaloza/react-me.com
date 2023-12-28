import { mdiTriangle } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSortUp(props: Omit<iBaseIconProps, 'path'>) {
  const { iconSize } = props
  const customIconSize = iconSize ?? 6

  return (
    <BaseIcon
      {...props}
      iconSize={customIconSize}
      aria-label='icon sort up'
      path={mdiTriangle}
    />
  )
}
