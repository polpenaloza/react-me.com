import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import { IconMoon } from '../Icon/Moon'
import { IconSun } from '../Icon/Sun'

export interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(!document.documentElement.classList.contains('dark'))
  }, [])

  const onChange = () => {
    const nextIsLight = !isLight

    setIsLight(nextIsLight)
    document.documentElement.classList.toggle('dark', !nextIsLight)
  }

  return (
    <Switch.Root
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      checked={isLight}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center rounded-lg p-1 text-slate-500 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        className
      )}
      onCheckedChange={onChange}
    >
      {isLight ? <IconMoon size={22} /> : <IconSun size={22} />}
    </Switch.Root>
  )
}
