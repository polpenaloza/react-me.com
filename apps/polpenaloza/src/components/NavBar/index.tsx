import { UIButton } from '@workspace/ui/src/Button'
import { ParticlesButton } from '@workspace/ui/src/Button/FancyButton'
import { IconTheme } from '@workspace/ui/src/Icon/Theme'
import { IconTranslate } from '@workspace/ui/src/Icon/Translate'
import { RotateText } from '@workspace/ui/src/Rotate'
import { useIsSSR } from '@react-aria/ssr'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
const BrandIcon = dynamic(() => import('@workspace/ui/src/Icon/Brand'))

import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

export const NavBar = () => {
  const { i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
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

  function handleSwitchTheme() {
    setTheme(darkMode ? 'light' : 'dark')
    setDarkMode()
  }

  // return (
  //   <div className='navbar bg-base-100'>
  //     <div className='navbar-start'>
  //       <div className='dropdown'>
  //         <button className='btn btn-circle btn-ghost'>
  //           <svg
  //             xmlns='http://www.w3.org/2000/svg'
  //             className='h-5 w-5'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             stroke='currentColor'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               d='M4 6h16M4 12h16M4 18h7'
  //             />
  //           </svg>
  //         </button>
  //         <ul className='menu dropdown-content rounded-box bg-base-100 mt-3 w-52 p-2 shadow'>
  //           <li>
  //             <Link href='/'>Home</Link>
  //             <Link href='https://x.polpenaloza.com'>X-Clone</Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div className='navbar-center'>
  //       <div className='flex items-center gap-1 px-2 font-mono text-xs font-bold sm:text-base'>
  //         <a
  //           className='hidden sm:block'
  //           href='https://github.com/polpenaloza/react-me.com'
  //           target='_blank'
  //           rel='noreferrer'
  //         >
  //           dev@polpenaloza: ~/$
  //         </a>
  //         <div
  //           className={clsx([
  //             'flex items-center justify-center gap-1 font-light',
  //             {
  //               'text-purple-700': !darkMode,
  //               'text-pink-300': darkMode,
  //             },
  //           ])}
  //         >
  //           <RotateText
  //             phrases={[
  //               'git config --global user.name “[firstname lastname]”',
  //               'git config --global user.email “[valid-email]”',
  //               'git init',
  //               'git clone [ssh]',
  //               'git branch -d [branch-name]',
  //               'git status',
  //               'git add -A',
  //               'git commit -m “[descriptive message]”',
  //               'git checkout [branch-name]',
  //               'git push origin [branch-name]',
  //               'git pull',
  //               'git merge [branch-name]',
  //               'git reset --hard [commit]',
  //               'git log',
  //               'git show [commit]',
  //               'git diff [first-branch]...[second-branch]',
  //               'git tag [commitID]',
  //               'git fetch',
  //               'git stash',
  //               'git rebase [branch]',
  //               'git remote add origin [url]',
  //               'git remote -v',
  //               'git remote set-url origin [url]',
  //             ]}
  //           />
  //           <div className='animate-blink'>|</div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className='navbar-end'>
  //       <div className='flex items-center justify-center align-middle'>
  //         <div className='mt-1 hidden h-full px-2 py-1 text-xs uppercase sm:block'>
  //           {i18n.language}
  //         </div>
  //         <UIButton aria-label='translate' onClick={() => changeLanguage()}>
  //           <IconTranslate />
  //         </UIButton>
  //         <ParticlesButton
  //           aria-label='theme'
  //           isDarkMode={darkMode}
  //           onClick={() => setDarkMode()}
  //         >
  //           <IconTheme />
  //         </ParticlesButton>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <Navbar>
      <NavbarBrand>
        <BrandIcon iconSize={30} />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='/'>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='https://x.polpenaloza.com'>X-Clone</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {/* <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <ParticlesButton
            aria-label='theme'
            isDarkMode={darkMode}
            onClick={handleSwitchTheme}
          >
            <IconTheme />
          </ParticlesButton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar
