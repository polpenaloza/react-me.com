import classNames from 'classnames/dedupe'
import { InputHTMLAttributes, RefObject } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement>
  className?: string
  inputSize?: InputSize
}

export function Input({
  className,
  inputRef,
  inputSize,
  ...otherProps
}: iInputProps) {
  return (
    <input
      {...otherProps}
      ref={inputRef}
      autoComplete='off'
      autoCapitalize='off'
      className={classNames([
        'input input-bordered block w-full rounded-3xl border border-[#D8E1E8] p-2',
        'placeholder:text-[#738694]',
        'disabled:bg-gray-400',
        'focus:outline-none focus:ring-0',
        {
          'input-sm text-sm': inputSize === 'sm',
          'input-lg text-base': inputSize === 'lg',
          'input-md text-base': !inputSize,
        },
        className,
      ])}
    />
  )
}
