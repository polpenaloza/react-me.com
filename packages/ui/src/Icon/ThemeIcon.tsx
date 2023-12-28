import { mdiThemeLightDark } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const ThemeIcon = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiThemeLightDark} />
}
