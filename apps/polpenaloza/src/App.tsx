import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
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
      <div className='flex min-h-screen flex-col'>
        <NavBar />
        <main className='container mx-auto w-full max-w-7xl flex-grow px-6 pt-16'>
          <Home />
        </main>
        <Footer />
      </div>
    </AppProviders>
  )
}
