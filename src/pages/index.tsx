import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

import {
  iAppPersistState,
  useAppPersistStore,
} from '../core/store/persistState'

const LayoutAuthenticated = dynamic(
  () => import('../components/Layout/Authenticated')
)

const Home = () => {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )
  const { t } = useTranslation()

  return (
    <LayoutAuthenticated>
      <div className='flex h-full flex-col items-center justify-between'>
        <div className='p-3 text-3xl font-bold'>{t('welcome')}</div>
        <div className=''>
          <svg
            className='min-h[100px] max-h[250px] mb-[0px] h-[40vh] w-full'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
          >
            <defs>
              <path
                id='gentle-wave'
                d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
              />
            </defs>
            <g className='parallax'>
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='0'
                fill={
                  darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(59,130,246,0.7)'
                }
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='3'
                fill={
                  darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(59,130,246,0.5)'
                }
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='5'
                fill={
                  darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(59,130,246,0.3)'
                }
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='7'
                fill={darkMode ? '#fff' : 'rgb(59,130,246)'}
              />
            </g>
          </svg>
        </div>
      </div>
    </LayoutAuthenticated>
  )
}

export default Home
