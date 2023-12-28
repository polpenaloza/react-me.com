import { BrandIcon } from '@workspace/ui/src/Icon/BrandIcon'
import { GithubIcon } from '@workspace/ui/src/Icon/GithubIcon'
import { LinkedinIcon } from '@workspace/ui/src/Icon/LinkedinIcon'
import { TwitterIcon } from '@workspace/ui/src/Icon/TwitterIcon'
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
          <GithubIcon iconSize={30} />
        </a>
        <a
          target={'_blank'}
          href='https://twitter.com/polpenaloza'
          rel='noopener noreferrer'
          title='@polpenaloza'
        >
          <TwitterIcon iconSize={30} />
        </a>
        <a
          target={'_blank'}
          href='https://www.linkedin.com/in/polpenaloza/'
          rel='noopener noreferrer'
          title='polpenaloza'
        >
          <LinkedinIcon iconSize={30} />
        </a>
      </div>
    </footer>
  )
}
