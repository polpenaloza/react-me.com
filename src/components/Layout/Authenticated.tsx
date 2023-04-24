import classNames from 'classnames'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'

import { SEO } from '~/components/Seo'
import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const FooterBar = dynamic(() => import('~/components/Footer/FooterBar'))

type Props = {
  children: ReactNode
  title?: string
}

export default function LayoutAuthenticated({ children, title }: Props) {
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
      <SEO
        description='polpenaloza.com'
        title={title || 'Home'}
        siteTitle='react-me'
        twitter='@polpenaloza'
        image='https://twitter.com/polpenaloza/photo'
      />
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
