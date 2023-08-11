'use client'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'

import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const FooterBar = dynamic(() => import('~/components/Footer/FooterBar'))

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
            'flex grow flex-col',
            'h-screen w-screen transition-position',
          ])}
        >
          {children}
          <FooterBar />
        </div>
      </div>
    </>
  )
}
