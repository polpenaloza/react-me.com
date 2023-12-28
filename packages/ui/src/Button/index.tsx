import { ButtonHTMLAttributes, ReactNode } from 'react'

import { iBaseButtonProps, useButton } from './useButton'
export interface iButtonProps
  extends iBaseButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({
  children,
  className,
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
    ...otherProps,
  })

  return (
    <button {...otherProps} className={classNames} type='button'>
      {loading ? <span className='loading loading-spinner'></span> : null}
      {children}
    </button>
  )
}
