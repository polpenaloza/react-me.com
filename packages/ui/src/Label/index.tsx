import clsx from 'clsx'
import { ReactNode } from 'react'

export function Label({
  className,
  title,
  emjoi,
  children,
  size = 'lg',
  fit = true,
}: {
  className?: string
  title?: string
  emjoi?: ReactNode
  children?: ReactNode
  size?: 'sm' | 'lg'
  fit?: boolean
}) {
  return (
    <div
      className={clsx([
        'flex h-full flex-col justify-between',
        { 'w-full': fit, 'text-xs': size === 'sm', 'text-base': size === 'lg' },
        className,
      ])}
    >
      <span
        className={clsx([
          'flex w-full items-center font-normal uppercase text-[#394B59]',
          { 'pb-2': Boolean(children) },
          { 'h-auto text-xs': size === 'sm', 'h-10 text-base': size === 'lg' },
        ])}
      >
        {title} {emjoi}
      </span>
      {children}
    </div>
  )
}
