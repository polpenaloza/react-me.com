import { mdiGithub } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const IconGithub = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiGithub} />
}
