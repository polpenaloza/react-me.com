import { mdiTwitter } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const TwitterIcon = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiTwitter} />
}
