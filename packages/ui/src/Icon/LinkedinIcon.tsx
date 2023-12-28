import { mdiLinkedin } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const LinkedinIcon = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiLinkedin} />
}
