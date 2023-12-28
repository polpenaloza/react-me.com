import { mdiLayersTriple } from '@mdi/js'
import classNames from 'classnames/dedupe'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconNfts(props: Omit<iBaseIconProps, 'path'>) {
  const { className } = props

  return (
    <BaseIcon
      {...props}
      className={classNames(['rotate-90 transform', className])}
      aria-label='icon nfts'
      path={mdiLayersTriple}
    />
  )
}
