import { AnchorHTMLAttributes, ReactNode } from 'react'

import { iBaseButtonProps, useButton } from './useButton'
export interface iButtonProps
  extends iBaseButtonProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function AnchorButton({
  children,
  className = '',
  fullLength = false,
  variant = 'default',
  size = 'md',
  loading,
  ...otherProps
}: iButtonProps) {
  const classNames = useButton({
    className,
    fullLength,
    variant,
    size,
  })

  return (
    <a {...otherProps} className={classNames}>
      {loading ? <span className='loading loading-spinner'></span> : null}
      {children}
    </a>
  )
}
