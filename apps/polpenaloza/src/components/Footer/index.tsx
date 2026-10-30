import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import BrandIcon from '@workspace/ui/src/Icon/Brand'
import IconGithub from '@workspace/ui/src/Icon/Github'
import IconLinkedin from '@workspace/ui/src/Icon/Linkedin'
import IconTwitter from '@workspace/ui/src/Icon/Twitter'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className='footer items-center justify-center'>
      <Navbar>
        <NavbarBrand>
          <BrandIcon iconSize={30} />
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <p>
            {t('copyright')} &copy;{year} - {t('allRights')}
          </p>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <a
              target={'_blank'}
              href='https://github.com/polpenaloza'
              rel='noopener noreferrer'
              title='polpenaloza'
            >
              <IconGithub iconSize={30} />
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              target={'_blank'}
              href='https://twitter.com/polpenaloza'
              rel='noopener noreferrer'
              title='@polpenaloza'
            >
              <IconTwitter iconSize={30} />
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              target={'_blank'}
              href='https://www.linkedin.com/in/polpenaloza/'
              rel='noopener noreferrer'
              title='polpenaloza'
            >
              <IconLinkedin iconSize={30} />
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </footer>
  )
}
