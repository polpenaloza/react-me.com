import { ParticlesButton } from '@workspace/ui/src/Button/FancyButton'
import BrandIcon from '@workspace/ui/src/Icon/Brand'
import { IconTheme } from '@workspace/ui/src/Icon/Theme'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

export const NavBar = () => {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )
  const setDarkMode = useAppPersistStore(
    (state: iAppPersistState) => state.setDarkMode
  )

  function handleSwitchTheme() {
    setDarkMode()
  }

  return (
    <nav className='flex w-full items-center justify-between border-b border-slate-200 px-6 py-3 dark:border-slate-800'>
      <a aria-label='Home' className='flex items-center' href='/'>
        <BrandIcon iconSize={30} />
      </a>
      <div className='flex items-center gap-4'>
        <a className='hover:underline' href='/'>
          Home
        </a>
        <a className='hover:underline' href='https://x.polpenaloza.com'>
          X-Clone
        </a>
        <ParticlesButton
          aria-label='Toggle color theme'
          className='text-slate-600 dark:text-slate-300'
          isDarkMode={darkMode}
          onClick={handleSwitchTheme}
        >
          <IconTheme />
        </ParticlesButton>
      </div>
    </nav>
  )
}

export default NavBar
