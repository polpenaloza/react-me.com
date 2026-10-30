import BrandIcon from '@workspace/ui/src/Icon/Brand'
import IconGithub from '@workspace/ui/src/Icon/Github'
import IconLinkedin from '@workspace/ui/src/Icon/Linkedin'
import IconTwitter from '@workspace/ui/src/Icon/Twitter'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className='flex w-full flex-wrap items-center justify-between gap-4 border-t border-slate-200 px-6 py-4 dark:border-slate-800'>
      <div>
        <BrandIcon iconSize={30} />
      </div>
      <p className='hidden sm:block'>
        {t('copyright')} &copy;{year} - {t('allRights')}
      </p>
      <div className='flex items-center gap-4'>
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
