'use client'

import { Particles } from '@workspace/ui/src/Particles'
import classNames from 'classnames'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

const Home = () => {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  return (
    <>
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
    </>
  )
}

export default Home
