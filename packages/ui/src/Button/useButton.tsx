import classNames from 'classnames/dedupe'

export interface iBaseButtonProps {
  className?: string
  circle?: boolean
  disabled?: boolean
  fullLength?: boolean
  loading?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outline-primary'
    | 'clean'
    | 'blank'
}

export function useButton({
  circle = true,
  className,
  disabled,
  fullLength = false,
  variant = 'default',
  size = 'md',
}: iBaseButtonProps) {
  if (variant === 'blank') {
    return classNames(['h-full w-full', className])
  }

  return classNames([
    /** @primary */
    { 'btn-primary text-base-100': variant === 'primary' },
    /** @secondary */
    { 'btn-secondary text-base-100': variant === 'secondary' },
    /** @outline */
    {
      outline: variant === 'outline',
      'outline outline-primary text-primary bg-base-100 ':
        variant === 'outline-primary',
    },
    /** @baseClass */
    'btn overflow-hidden !normal-case',
    { 'rounded-full': circle },
    { 'btn-neutral text-base-100': variant === 'default' },
    { 'btn-block': fullLength },
    { 'btn-sm': size === 'sm' },
    { 'btn-xs': size === 'xs' },
    { 'btn-md h-[2.5rem] min-h-[2.5rem]': size === 'md' },
    { 'btn-lg': size === 'lg' },
    { 'btn-disabled': disabled },
    { 'btn-ghost': variant === 'clean' },
    className,
  ])
}
