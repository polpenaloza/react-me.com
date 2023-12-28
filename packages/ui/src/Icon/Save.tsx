import { mdiContentSaveOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconSave(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon save' path={mdiContentSaveOutline} />
  )
}
