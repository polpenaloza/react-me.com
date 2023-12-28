import { mdiWeatherNight } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconMoon(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon theme dark'
      path={mdiWeatherNight}
      flatSvg
    />
  )
}
