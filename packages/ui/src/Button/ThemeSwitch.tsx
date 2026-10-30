import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import { IconMoon } from '../Icon/Moon'
import { IconSun } from '../Icon/Sun'

export interface ThemeSwitchProps {
  className?: string
  classNames?: SwitchProps['classNames']
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(!document.documentElement.classList.contains('dark'))
  }, [])

  const onChange = () => {
    const nextIsLight = !isLight

    setIsLight(nextIsLight)
    document.documentElement.classList.toggle('dark', !nextIsLight)
  }

  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch({
      isSelected: isLight,
      'aria-label': `Switch to ${isLight ? 'dark' : 'light'} mode`,
      onChange,
    })

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'px-px transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'h-auto w-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper
          ),
        })}
      >
        {isLight ? <IconMoon size={22} /> : <IconSun size={22} />}
      </div>
    </Component>
  )
}
