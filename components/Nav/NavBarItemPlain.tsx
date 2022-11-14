import React, { ReactNode } from 'react'

import { iAppState, useAppStore } from '../../core/store'

type Props = {
  display?: string
  useMargin?: boolean
  children: ReactNode
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent) => void
}

export default function NavBarItemPlain({
  display = 'flex',
  useMargin = false,
  onClick,
  children,
}: Props) {
  const styleState = useAppStore((state: iAppState) => state.style)
  const navBarItemLabelStyle = styleState.navBarItemLabelStyle
  const navBarItemLabelHoverStyle = styleState.navBarItemLabelHoverStyle

  const classBase =
    'items-center cursor-pointer dark:text-white dark:hover:text-slate-400'
  const classAddon = `${display} ${navBarItemLabelStyle} ${navBarItemLabelHoverStyle} ${
    useMargin ? 'my-2 mx-3' : 'py-2 px-3'
  }`

  return (
    <div className={`${classBase} ${classAddon}`} onClick={onClick}>
      {children}
    </div>
  )
}
