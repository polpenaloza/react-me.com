import classNames from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/Button'
import { ThemeIcon } from '@/components/Icon/ThemeIcon'
import { TranslateIcon } from '@/components/Icon/TranslateIcon'
import { RotateText } from '@/components/Rotate'
import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

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
          <label tabIndex={0} className='btn btn-circle btn-ghost'>
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
            className='menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <div className='flex items-center gap-1 px-2 font-mono text-xs font-bold sm:text-base'>
          <a
            className='hidden sm:block'
            href='https://github.com/polpenaloza/react-me.com'
            target='_blank'
            rel='noreferrer'
          >
            dev@polpenaloza: ~/$
          </a>
          <div
            className={classNames([
              'flex items-center justify-center gap-1 font-light',
              {
                'text-purple-700': !darkMode,
                'text-pink-300': darkMode,
              },
            ])}
          >
            <RotateText
              phrases={[
                'git config --global user.name “[firstname lastname]”',
                'git config --global user.email “[valid-email]”',
                'git init',
                'git clone [ssh]',
                'git branch -d [branch-name]',
                'git status',
                'git add -A',
                'git commit -m “[descriptive message]”',
                'git checkout [branch-name]',
                'git push origin [branch-name]',
                'git pull',
                'git merge [branch-name]',
                'git reset --hard [commit]',
                'git log',
                'git show [commit]',
                'git diff [first-branch]...[second-branch]',
                'git tag [commitID]',
                'git fetch',
                'git stash',
                'git rebase [branch]',
                'git remote add origin [url]',
                'git remote -v',
                'git remote set-url origin [url]',
              ]}
            />
            <div className='animate-blink'>|</div>
          </div>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='flex items-center justify-center align-middle'>
          <div className='mt-1 hidden h-full px-2 py-1 text-xs uppercase sm:block'>
            {i18n.language}
          </div>
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
    </div>
  )
}

export default NavBar
