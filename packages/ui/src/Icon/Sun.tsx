import { mdiWhiteBalanceSunny } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSun(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon theme light'
      path={mdiWhiteBalanceSunny}
      flatSvg
    />
  )
}
