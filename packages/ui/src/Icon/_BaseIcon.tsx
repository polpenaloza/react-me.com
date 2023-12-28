import classNames from 'classnames/dedupe'
import { SVGAttributes } from 'react'

export interface iBaseIconProps extends SVGAttributes<HTMLOrSVGElement> {
  size?: string | number | null
  iconSize?: string | number | null
  flatSvg?: boolean
}

export function BaseIcon({
  path,
  size,
  iconSize,
  className = '',
  flatSvg = false,
  viewBox,
  ...otherProps
}: iBaseIconProps) {
  const icon = iconSize ?? 16

  if (flatSvg) {
    return (
      <svg
        {...otherProps}
        aria-hidden='true'
        viewBox={viewBox ?? '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'
        width={icon}
        height={icon}
        className={className}
      >
        <path fill='currentColor' d={path} />
      </svg>
    )
  }

  return (
    <div
      className={classNames([
        'flex items-center justify-center transition-colors',
        { [`w-${size}`]: size },
        { [`h-${size}`]: size },
        className,
      ])}
    >
      <svg
        {...otherProps}
        aria-hidden='true'
        viewBox={viewBox ?? '0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'
        width={icon}
        height={icon}
        className='inline-block'
      >
        <path fill='currentColor' d={path} />
      </svg>
    </div>
  )
}
