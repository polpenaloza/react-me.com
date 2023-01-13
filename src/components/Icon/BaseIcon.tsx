import classNames from 'classnames'

export type BaseProps = {
  path: string
  size?: string | number | null
  iconSize?: string | number | null
  className?: string
}

export const BaseIcon = ({
  path,
  size,
  iconSize,
  className = '',
}: BaseProps) => {
  const icon = iconSize ?? 16

  return (
    <div
      className={classNames([
        'text-slate-900 transition-colors dark:text-slate-100',
        { [`w-${size}`]: size },
        { [`h-${size}`]: size },
        className,
      ])}
    >
      <svg
        viewBox='0 0 24 24'
        width={icon}
        height={icon}
        className='inline-block'
      >
        <path fill='currentColor' d={path} />
      </svg>
    </div>
  )
}

export default BaseIcon
