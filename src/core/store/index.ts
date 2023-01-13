import debug from 'debug'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const logger = debug('store')

export interface iAppState {
  main: any
  // eslint-disable-next-line no-unused-vars
  setMain(state: any): void
}

export const useAppStore = create<iAppState>()(
  immer(
    persist<iAppState>(
      (set) => ({
        main: {},
        setMain: (mainState) =>
          set((state: iAppState) => ({
            main: { ...state.main, ...mainState },
          })),
      }),
      {
        name: 'pol-store',
        onRehydrateStorage: () => {
          logger('hydration starts')
          return (state, error) => {
            if (error) {
              logger('an error happened during hydration', error)
            } else {
              logger('hydration finished', { state })
            }
          }
        },
      }
    )
  )
)
