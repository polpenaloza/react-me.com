'use client'

import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'

import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const Footer = dynamic(() => import('~/components/Footer'))
const NavBar = dynamic(() => import('~/components/NavBar'))

type Props = {
  children: ReactNode
}

export default function MainTemplate({ children }: Props) {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  return (
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
  )
}
