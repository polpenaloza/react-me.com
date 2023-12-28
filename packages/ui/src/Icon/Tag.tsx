import { mdiMore } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconTag(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon tag' path={mdiMore} />
}
