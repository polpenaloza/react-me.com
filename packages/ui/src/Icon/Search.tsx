import { mdiSearchWeb } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSearch(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon save' path={mdiSearchWeb} />
}
