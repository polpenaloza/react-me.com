import React, { ReactNode } from 'react'

import { initialStyleState } from '../../core/initialState'

// import { useAppSelector } from '../src/stores/hooks'

type Props = {
  zIndex?: string
  type?: string
  children?: ReactNode
  onClick: (e: React.MouseEvent) => void
}

export default function OverlayLayer({
  zIndex = 'z-50',
  type = 'flex',
  children,
  ...props
}: Props) {
  // const overlayStyle = useAppSelector((state) => state.style.overlayStyle)
  const overlayStyle = initialStyleState.overlayStyle

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <div
      className={`${type} ${zIndex} items-center flex-col justify-center overflow-hidden fixed inset-0`}
    >
      <div
        className={`${overlayStyle} absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700`}
        onClick={handleClick}
      ></div>

      {children}
    </div>
  )
}
