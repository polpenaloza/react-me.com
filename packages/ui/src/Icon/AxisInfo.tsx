import { mdiAxisArrowInfo } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconAxisInfo(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon info' path={mdiAxisArrowInfo} />
}
