import { useMemo } from 'react'
import { useMediaQuery as useMQ } from 'usehooks-ts'

type tBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export function useMediaQuery(breakpoint: tBreakpoint): boolean {
  const breakpointMap: { [key: string]: string } = useMemo(
    () => ({
      xs: '(min-width: 0px)',
      sm: '(min-width: 328px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1440px)',
    }),
    []
  )

  const matches = useMQ(breakpointMap[breakpoint])

  return matches
}
