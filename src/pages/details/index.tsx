import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const LayoutAuthenticated = dynamic(
  () => import('../../components/Layout/Authenticated')
)

const DetailsPage = () => {
  const { query } = useRouter()
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-between'>
      <h1 className='p-3 text-3xl font-bold'>{t('dynamic-route')}</h1>
      <pre className='code'>{JSON.stringify(query, null, 2)}</pre>
      <div></div>
    </div>
  )
}

DetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DetailsPage
