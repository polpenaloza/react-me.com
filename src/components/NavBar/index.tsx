import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const Button = dynamic(() => import('~/components/Button/BaseButton'))
const ThemeIcon = dynamic(() => import('~/components/Icon/ThemeIcon'))
const TranslateIcon = dynamic(() => import('~/components/Icon/TranslateIcon'))

export const NavBar = () => {
  const { i18n } = useTranslation()
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )
  const setDarkMode = useAppPersistStore(
    (state: iAppPersistState) => state.setDarkMode
  )

  const changeLanguage = () => {
    const switchTo = i18n.language === 'en' ? 'es' : 'en'

    i18n.changeLanguage(switchTo)
  }

  return (
    <div className='flex items-center justify-between p-2'>
      <div>
        <div className='flex items-center px-2 font-mono font-bold'>
          <a
            href='https://github.com/polpenaloza/react-me.com'
            target='_blank'
            rel='noreferrer'
          >
            dev@polpenaloza: ~/$
          </a>
          <span className='animate-blink font-mono font-bold'>|</span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='px-4'>{i18n.language}</div>
        <Button
          aria-label='translate'
          variant='outline'
          onClick={() => changeLanguage()}
        >
          <TranslateIcon />
        </Button>
        <Button
          aria-label='theme'
          variant='outline'
          particles
          isDarkMode={darkMode}
          onClick={() => setDarkMode()}
        >
          <ThemeIcon />
        </Button>
      </div>
    </div>
  )
}

export default NavBar
