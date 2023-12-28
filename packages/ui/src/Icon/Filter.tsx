import { mdiFilterVariant } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconFilter(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon filter' path={mdiFilterVariant} />
  )
}
