import { LabelHTMLAttributes, ReactNode } from 'react'

import { iBaseButtonProps, useButton } from './useButton'
export interface iButtonProps
  extends iBaseButtonProps,
    LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  disabled?: boolean
}

export function LabelButton({
  children,
  className = '',
  fullLength = false,
  variant = 'default',
  size = 'md',
  loading,
  disabled,
  ...otherProps
}: iButtonProps) {
  const classNames = useButton({
    className,
    fullLength,
    variant,
    size,
    disabled,
  })

  return (
    <label {...otherProps} className={classNames}>
      {loading ? <span className='loading loading-spinner'></span> : null}
      {children}
    </label>
  )
}
