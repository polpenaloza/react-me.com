import { mdiInformationOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconInfo(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon info' path={mdiInformationOutline} />
  )
}
