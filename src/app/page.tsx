'use client'

import classNames from 'classnames'
import { Suspense } from 'react'

import { Loader } from '~/components/Loader'
import { Particles } from '~/components/Particles'
import { iAppPersistState, useAppPersistStore } from '~/core/store/persistState'

const Home = () => {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  return (
    <Suspense fallback={<Loader />}>
      <section className='flex h-full flex-col items-center justify-between overflow-auto'>
        {!darkMode ? (
          <>
            <div
              className={classNames([
                'flex items-center justify-center',
                'z-1 relative h-full min-h-max w-full overflow-hidden',
                'bg-cover p-2 bg-blend-lighten',
              ])}
            >
              <div className='bird-container bird-container--one fill-white text-white'>
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
          </>
        ) : null}
      </section>
      <section>
        <Particles config={darkMode ? 'parallax' : ''} />
      </section>
    </Suspense>
  )
}

export default Home
