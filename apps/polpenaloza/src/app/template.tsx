'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Suspense, useState } from 'react'

import { Loader } from '@/components/Loader'
import { useIsMounted } from '@/core/hooks/useIsMounted'
import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

const Footer = dynamic(() => import('@/components/Footer'))
const NavBar = dynamic(() => import('@/components/NavBar'))

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )
  const [isReady, setIsReady] = useState(false)

  useIsMounted(() => {
    setIsReady(true)
  })

  if (!isReady || typeof window === 'undefined')
    return (
      <div className='absolute flex min-h-screen w-full min-w-max items-center justify-center'>
        <Loader />
      </div>
    )

  return (
    <Suspense fallback={<div className='animate-pulse'>...</div>}>
      <div
        className='flex h-full min-h-screen w-screen flex-col'
        data-theme={darkMode ? 'night' : 'light'}
      >
        <div className='h-14'>
          <NavBar />
        </div>
        {children}
        <Footer />
      </div>
    </Suspense>
  )
}
