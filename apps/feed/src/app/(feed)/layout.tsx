import { getServerAuthSession } from '@workspace/server/src/auth'
import { type Metadata } from 'next'

import { CreatePost } from '@/app/_components/CreatePost'

export const metadata: Metadata = {
  title: 'Feed',
}

export default async function AuthenticatedRoot({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()
  const userData = session?.user

  return (
    <section className='relative flex w-full grow'>
      {userData ? <CreatePost /> : null}
      <div className='relative flex grow flex-col items-center gap-2 overflow-auto p-2'>
        {children}
      </div>
    </section>
  )
}
