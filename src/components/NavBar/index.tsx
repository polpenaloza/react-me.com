import dynamic from 'next/dynamic'
import Link from 'next/link'
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
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn-ghost btn-circle btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/'>Homepage</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
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
      <div className='navbar-end'>
        <div className='px-4 uppercase'>{i18n.language}</div>
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
