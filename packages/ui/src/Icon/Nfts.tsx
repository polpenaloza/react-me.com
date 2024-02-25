import { mdiLayersTriple } from '@mdi/js'
import clsx from 'clsx'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconNfts(props: Omit<iBaseIconProps, 'path'>) {
  const { className } = props

  return (
    <BaseIcon
      {...props}
      className={clsx(['rotate-90 transform', className])}
      aria-label='icon nfts'
      path={mdiLayersTriple}
    />
  )
}
