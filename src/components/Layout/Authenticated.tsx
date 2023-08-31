'use client'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'

import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const Footer = dynamic(() => import('~/components/Footer'))

type Props = {
  children: ReactNode
}

export function LayoutAuthenticated({ children }: Props) {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  /** @states */
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return <div />

  return (
    <>
      <div data-theme={darkMode ? 'night' : 'light'}>
        <div
          className={classNames([
            'z-1 flex grow flex-col',
            'h-screen w-screen',
          ])}
        >
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
