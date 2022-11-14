import { useEffect, useState } from 'react'

export const usePersistData = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return [isHydrated]
}
