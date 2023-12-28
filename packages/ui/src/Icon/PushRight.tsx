import { mdiFormatVerticalAlignTop } from '@mdi/js'
import classNames from 'classnames/dedupe'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconPushRight(props: Omit<iBaseIconProps, 'path'>) {
  const { className } = props

  return (
    <BaseIcon
      {...props}
      className={classNames(['rotate-90 transform', className])}
      aria-label='icon push right'
      path={mdiFormatVerticalAlignTop}
    />
  )
}
