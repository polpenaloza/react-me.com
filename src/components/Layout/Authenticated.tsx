import classNames from 'classnames'
import dynamic from 'next/dynamic'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  iAppPersistState,
  useAppPersistStore,
} from '../../core/store/persistState'
import { SEO } from '../Seo'

const Button = dynamic(() => import('~/components/Button/BaseButton'))
const FooterBar = dynamic(() => import('~/components/Footer/FooterBar'))
const ThemeIcon = dynamic(() => import('~/components/Icon/ThemeIcon'))
const TranslateIcon = dynamic(() => import('~/components/Icon/TranslateIcon'))

type Props = {
  children: ReactNode
  title?: string
}

export default function LayoutAuthenticated({ children, title }: Props) {
  const { i18n } = useTranslation()
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )
  const setDarkMode = useAppPersistStore((state) => state.setDarkMode)

  const changeLanguage = () => {
    const switchTo = i18n.language === 'en' ? 'es' : 'en'

    i18n.changeLanguage(switchTo)
  }
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
      <div className={classNames([{ ['dark']: darkMode }])}>
        <div
          className={classNames([
            'flex grow flex-col',
            'h-screen w-screen transition-shadow',
            'bg-white dark:bg-slate-800',
            'text-slate-800 dark:text-slate-200',
          ])}
        >
          <div className='flex h-14 flex-row-reverse items-center p-2'>
            <Button
              variant='outline'
              aria-label='translate'
              onClick={() => changeLanguage()}
            >
              <TranslateIcon />
            </Button>
            <Button
              variant='outline'
              onClick={() => setDarkMode()}
              aria-label='theme'
            >
              <ThemeIcon />
            </Button>
          </div>
          {children}
          <FooterBar />
        </div>
      </div>
    </>
  )
}
