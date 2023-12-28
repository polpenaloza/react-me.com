import { mdiCardsPlaying } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconCardsPlaying(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon cards' path={mdiCardsPlaying} />
}
