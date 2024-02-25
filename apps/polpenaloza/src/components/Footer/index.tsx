import { BrandIcon } from '@workspace/ui/src/Icon/Brand'
import { IconGithub } from '@workspace/ui/src/Icon/Github'
import { IconLinkedin } from '@workspace/ui/src/Icon/Linkedin'
import { IconTwitter } from '@workspace/ui/src/Icon/Twitter'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className='footer bg-base-100 text-base-content mt-auto items-center justify-center p-4 sm:justify-normal'>
      <div className='grid-flow-col items-center'>
        <BrandIcon iconSize={30} />
        <p>
          {t('copyright')} &copy;{year} - {t('allRights')}
        </p>
      </div>
      <div className='grid-flow-col gap-4 place-self-center md:place-self-center md:justify-self-end'>
        <a
          target={'_blank'}
          href='https://github.com/polpenaloza'
          rel='noopener noreferrer'
          title='polpenaloza'
        >
          <IconGithub iconSize={30} />
        </a>
        <a
          target={'_blank'}
          href='https://twitter.com/polpenaloza'
          rel='noopener noreferrer'
          title='@polpenaloza'
        >
          <IconTwitter iconSize={30} />
        </a>
        <a
          target={'_blank'}
          href='https://www.linkedin.com/in/polpenaloza/'
          rel='noopener noreferrer'
          title='polpenaloza'
        >
          <IconLinkedin iconSize={30} />
        </a>
      </div>
    </footer>
  )
}
