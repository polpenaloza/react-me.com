import { mdiLinkedin } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const IconLinkedin = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiLinkedin} />
}
