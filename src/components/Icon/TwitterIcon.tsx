import { mdiTwitter } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const TwitterIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiTwitter} />
}
