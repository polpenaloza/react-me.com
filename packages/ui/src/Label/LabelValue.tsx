import classNames from 'classnames/dedupe'
import { ReactNode } from 'react'

export function LabelValue({
  className,
  legend,
  suffix,
  value,
  isLoading,
  size = 'lg',
}: {
  className?: string
  legend?: string
  suffix?: string | ReactNode
  value?: string | number
  isLoading?: boolean
  size?: 'sm' | 'lg'
}) {
  const Loading = ({
    children,
    loading,
    className,
  }: {
    children: ReactNode
    loading?: boolean
    className?: string
  }) => (
    <div
      className={classNames([
        {
          'bg-secondary/20 h-full min-h-8 w-full animate-pulse rounded-full shadow-sm':
            loading,
        },
        className,
      ])}
    >
      {loading ? null : children}
    </div>
  )

  /** @render */
  return (
    <div
      className={classNames([
        'flex flex-col',
        { 'text-sm': size === 'sm', 'text-xl': size === 'lg' },
        className,
      ])}
    >
      <div className='text-primary flex items-center gap-2 font-bold'>
        <Loading loading={isLoading}>{value}</Loading>
        <Loading loading={isLoading}>{suffix}</Loading>
      </div>

      {legend ? (
        <div className='text-sm font-normal text-[#202B33]'>{legend}</div>
      ) : null}
    </div>
  )
}
