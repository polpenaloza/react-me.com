import { mdiThemeLightDark } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const IconTheme = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiThemeLightDark} />
}
