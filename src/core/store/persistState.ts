import debug from 'debug'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const logger = debug('persist-store')

interface iUserState {
  userName: string
  userEmail: null | string
  userAvatar: null | string
}

const initialUserState: iUserState = {
  userName: '',
  userEmail: null,
  userAvatar: null,
}

export interface iAppPersistState {
  // dark mode
  darkMode: boolean
  setDarkMode(): void

  // user state
  user: iUserState
  // eslint-disable-next-line no-unused-vars
  setUser(state: iUserState): void
}

logger('init')

export const useAppPersistStore = create<iAppPersistState>()(
  immer(
    persist<iAppPersistState>(
      (set, get) => ({
        darkMode: true,
        setDarkMode: () => set(() => ({ darkMode: !get().darkMode })),
        user: initialUserState,
        setUser: (useState) =>
          set((state: iAppPersistState) => ({
            user: { ...state.user, ...useState },
          })),
      }),
      {
        name: 'zustand-app-store',
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
