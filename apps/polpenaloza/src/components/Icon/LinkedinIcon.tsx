import { mdiLinkedin } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const LinkedinIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiLinkedin} />
}
