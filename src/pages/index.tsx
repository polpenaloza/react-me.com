import classNames from 'classnames'
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
        <div
          className={classNames([
            'flex items-center justify-center',
            'z-1 relative h-full min-h-max w-full overflow-hidden',
            'bg-cover p-2 bg-blend-lighten',
          ])}
        >
          <div className='bird-container bird-container--one'>
            <div className='bird bird--one'></div>
          </div>

          <div className='bird-container bird-container--two'>
            <div className='bird bird--two'></div>
          </div>

          <div className='bird-container bird-container--three'>
            <div className='bird bird--three'></div>
          </div>

          <div className='bird-container bird-container--four'>
            <div className='bird bird--four'></div>
          </div>
        </div>
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
                className={darkMode ? 'fill-primary-200' : 'fill-secondary-200'}
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='3'
                className={darkMode ? 'fill-primary-400' : 'fill-secondary-400'}
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='5'
                className={darkMode ? 'fill-primary-300' : 'fill-secondary-300'}
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='7'
                className={darkMode ? 'fill-slate-200' : 'fill-slate-600'}
              />
            </g>
          </svg>
        </div>
      </div>
    </LayoutAuthenticated>
  )
}

export default Home
