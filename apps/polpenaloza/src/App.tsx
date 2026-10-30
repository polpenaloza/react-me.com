import { AppProviders } from '@/context/app-providers'
import {
  type iAppPersistState,
  useAppPersistStore,
} from '@/core/store/persistState'

function Home() {
  const darkMode = useAppPersistStore(
    (state: iAppPersistState) => state.darkMode
  )

  return (
    <section className='z-10 flex h-full w-full flex-col items-center justify-center'>
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </section>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  )
}
