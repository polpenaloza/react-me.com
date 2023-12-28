import classNames from 'classnames/dedupe'
import { ButtonHTMLAttributes } from 'react'

import { iBaseButtonProps, useButton } from './useButton'

interface iIconButtonProps
  extends iBaseButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function IconButton({
  children,
  className,
  fullLength = false,
  loading,
  variant = 'default',
  size = 'md',
  circle = true,
  ...otherProps
}: iIconButtonProps) {
  const cssClass = useButton({
    circle,
    className,
    fullLength,
    variant,
    size,
    ...otherProps,
  })

  return (
    <button
      {...otherProps}
      className={classNames([
        cssClass,
        {
          'btn-circle': circle,
          'rounded-[0.15rem]': !circle,
        },
      ])}
    >
      {loading ? <span className='loading loading-spinner'></span> : null}
      {children}
    </button>
  )
}
