import classNames from 'classnames'
import { ReactNode } from 'react'

export interface BaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: string
}

export const BaseButton = ({
  children,
  className = '',
  variant = 'default',
  ...otherProps
}: BaseProps) => {
  return (
    <div
      className={classNames([
        /** @default */
        { ['bg-slate-200 dark:bg-slate-700']: variant === 'default' },
        {
          ['hover:bg-slate-300 dark:hover:bg-slate-700']: variant === 'default',
        },
        {
          ['focus:ring-slate-300 dark:focus:ring-slate-700']:
            variant === 'default',
        },
        /** @primary */
        { ['bg-primary-700 dark:bg-primary-700']: variant === 'primary' },
        {
          ['hover:bg-primary-800 dark:hover:bg-primary-800']:
            variant === 'primary',
        },
        {
          ['focus:ring-primary-800 dark:focus:ring-primary-800']:
            variant === 'primary',
        },
        /** @secondary */
        { ['bg-secondary-400 dark:bg-secondary-600']: variant === 'secondary' },
        {
          ['hover:bg-secondary-500 dark:hover:bg-secondary-700']:
            variant === 'secondary',
        },
        {
          ['focus:ring-secondary-500 dark:focus:ring-secondary-700']:
            variant === 'secondary',
        },
        /** @outline */
        {
          ['bg-none']: variant === 'outline',
          ['hover:bg-slate-200 hover:dark:bg-slate-700']: variant === 'outline',
          ['focus:ring-slate-200 dark:focus:ring-slate-700']:
            variant === 'outline',
        },
        /** @baseClass */
        'rounded-md text-xs font-medium',
        'md:text-sm',
        'focus:outline-none focus:ring-4',
        className,
      ])}
    >
      <button {...otherProps} className='h-full w-full px-4 py-2' type='button'>
        {children}
      </button>
    </div>
  )
}

export default BaseButton
