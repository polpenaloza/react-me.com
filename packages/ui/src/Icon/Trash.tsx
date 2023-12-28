import { mdiTrashCanOutline } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconTrash(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon {...props} aria-label='icon trash' path={mdiTrashCanOutline} />
  )
}
