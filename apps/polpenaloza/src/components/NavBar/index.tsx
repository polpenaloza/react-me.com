import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
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
