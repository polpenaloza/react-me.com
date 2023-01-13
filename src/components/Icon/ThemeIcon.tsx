import { mdiThemeLightDark } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const ThemeIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiThemeLightDark} />
}

export default ThemeIcon
