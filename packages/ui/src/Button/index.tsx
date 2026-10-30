import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function UIButton({
  children,
  className,
  type = 'button',
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      type={type}
    >
      {children}
    </button>
  )
}
