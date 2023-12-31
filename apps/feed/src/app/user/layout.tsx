import { getServerAuthSession } from '@workspace/server/src/auth'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Profile',
}

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()
  const userData = session?.user

  return (
    <section className='w-ful flex grow flex-col items-center gap-2 overflow-auto p-2'>
      <div className='sticky top-0 flex w-full flex-col bg-black/10 p-6 font-bold backdrop-blur'>
        <h1 className='text-lg'>{userData?.name}</h1>
      </div>
      {children}
    </section>
  )
}
