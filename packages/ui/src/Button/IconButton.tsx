import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function IconButton({
  children,
  className,
  type = 'button',
  ...otherProps
}: IconButtonProps) {
  return (
    <button
      {...otherProps}
      className={clsx(
        'inline-flex items-center justify-center rounded-full p-2 text-red-500 transition-colors hover:bg-red-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500',
        className
      )}
      type={type}
    >
      {children}
    </button>
  )
}
