import classNames from 'classnames/dedupe'
import { forwardRef, InputHTMLAttributes, Ref } from 'react'

export interface iCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  ref?: Ref<HTMLInputElement>
}

export const Checkbox = forwardRef(
  ({ className, children, ...otherProps }: iCheckBoxProps, ref) => {
    return (
      <div
        {...otherProps}
        ref={ref as Ref<HTMLInputElement>}
        className='form-control'
      >
        <label className='label cursor-pointer gap-4'>
          <input
            type='checkbox'
            className={classNames([
              'checkbox checkbox-primary rounded-sm',
              className,
            ])}
          />
          {children}
        </label>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
