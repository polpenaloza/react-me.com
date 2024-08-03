'use client'

import clsx from 'clsx'

import { iAppPersistState, useAppPersistStore } from '@/core/store/persistState'

const Home = () => {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  return (
    <>
      <section className='flex h-full w-full flex-col items-center justify-center z-10'>
        {darkMode ? (
          'Dark Mode'
        ) : 'Light Mode'}
      </section>
    </>
  )
}

export default Home
