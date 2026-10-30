import { mdiAutorenew } from '@mdi/js'
import clsx from 'clsx'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconRefresh(props: Omit<iBaseIconProps, 'path'>) {
  const { className } = props

  return (
    <BaseIcon
      {...props}
      className={clsx(['rotate-90 transform', className])}
      aria-label='icon refresh'
      path={mdiAutorenew}
    />
  )
}
