import { mdiGithub } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const GithubIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiGithub} />
}

export default GithubIcon
