'use client'

import classNames from 'classnames'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'

import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const Footer = dynamic(() => import('~/components/Footer'))
const NavBar = dynamic(() => import('~/components/NavBar'))

type Props = {
  children: ReactNode
}

export function Main({ children }: Props) {
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
            'main-layout flex h-screen w-screen flex-col',
          ])}
        >
          <div className='h-14'>
            <NavBar />
          </div>
          <div className='block h-full'>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}
