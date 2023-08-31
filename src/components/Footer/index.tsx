import { useTranslation } from 'react-i18next'

import { BrandIcon } from '~/components/Icon/BrandIcon'
import { GithubIcon } from '~/components/Icon/GithubIcon'
import { LinkedinIcon } from '~/components/Icon/LinkedinIcon'
import { TwitterIcon } from '~/components/Icon/TwitterIcon'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className='footer items-center justify-center bg-base-100 p-4 text-base-content sm:justify-normal'>
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
