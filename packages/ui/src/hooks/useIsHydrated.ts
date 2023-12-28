// import logger from '@fluidnft/core-js/src/logger'
import { useEffect, useState } from 'react'

// const log = logger.extend('hydrated')

export function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(false)

  // log('safeguard %o', isHydrated)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return { isHydrated }
}
